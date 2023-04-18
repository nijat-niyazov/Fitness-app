import { useState } from 'react';
import { categories } from './categories';

const Test = () => {
  const [newParent, setNewParent] = useState(0);
  const [selectedParentsId, setSelectedParentsId] = useState([]);
  const [selectedChildsId, setSelectedChildsId] = useState([]);

  const onlySubCats = addedParent =>
    categories.filter(p => p.parent === addedParent);

  const getFilteredCategories = onlySubCats(newParent);

  // console.log(getFilteredCategories, selectedParentsId, selectedChildsId);

  return (
    <div>
      {selectedParentsId.length > 0 &&
        selectedParentsId.map((cat, index) => {
          const nextParentElements = onlySubCats(cat);

          return (
            <ul
              style={{ display: 'flex', listStyle: 'none', background: 'red' }}
            >
              {nextParentElements?.map(cat => {
                return (
                  <li
                    style={{ cursor: 'pointer', marginRight: '120px' }}
                    key={cat.id}
                    onClick={() => {
                      setSelectedParentsId([
                        ...selectedParentsId.slice(0, index),
                        cat.parent,
                      ]);
                      setSelectedChildsId([
                        ...selectedChildsId.slice(0, index),
                        cat.id,
                      ]);
                      setNewParent(cat.id);
                    }}
                  >
                    {cat.name}
                    <span
                      style={{
                        background: 'green',
                        color: 'white',
                        padding: '2px',
                      }}
                    >
                      {categories.filter(c => c.parent === cat.id).length > 0
                        ? '+'
                        : null}
                    </span>
                    <br />
                    <br />
                  </li>
                );
              })}
            </ul>
          );
        })}
      <ul>
        {getFilteredCategories.length > 0 &&
          getFilteredCategories.map(cat => {
            return (
              <>
                <li
                  style={{ cursor: 'pointer', marginRight: '120px' }}
                  key={cat.id}
                  onClick={() => {
                    setSelectedParentsId(parents => [...parents, cat.parent]);
                    setSelectedChildsId(childs => [...childs, cat.id]);
                    setNewParent(cat.id);
                  }}
                >
                  {cat.name}
                  {'   '}
                  <span
                    style={{
                      background: 'green',
                      color: 'white',
                      padding: '2px',
                    }}
                  >
                    {categories.filter(c => c.parent === cat.id).length > 0
                      ? '+'
                      : ''}
                  </span>
                </li>
                <br />
                <br />
              </>
            );
          })}
      </ul>
    </div>
  );
};

export default Test;
