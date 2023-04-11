import { useState } from 'react';
import { categories } from './categories';

const Test = () => {
  const [newParent, setNewParent] = useState(0);
  const [selectedParents, setSelectedParents] = useState([]);
  const [selectedChilds, setSelectedChilds] = useState([]);

  const onlySubCats = addedParent =>
    categories.filter(p => p.parent === addedParent);

  const getFilteredCategories = onlySubCats(newParent);

  return (
    <div>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        {selectedParents.length > 0 &&
          selectedParents.map(cat => {
            return (
              <ul className="">
                {onlySubCats(cat)?.map(cat => {
                  return (
                    <li
                      style={{ cursor: 'pointer', marginRight: '120px' }}
                      key={cat.id}
                      onClick={() => {
                        setSelectedParents(parent => [...parent, cat.parent]);
                        setNewParent(cat.id);
                      }}
                    >
                      {cat.name} <br />
                      <br />
                    </li>
                  );
                })}
              </ul>
            );
          })}
      </ul>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        {getFilteredCategories.length > 0 &&
          getFilteredCategories.map(cat => {
            return (
              <>
                <li
                  style={{ cursor: 'pointer', marginRight: '120px' }}
                  key={cat.id}
                  onClick={() => {
                    setSelectedParents(parent => [...parent, cat.parent]);
                    setNewParent(cat.id);
                  }}
                >
                  {cat.name} <br />
                  <br />
                  {/* <span>
                    {categories.filter(c => c.parent === cat.id).length}
                  </span> */}
                </li>
              </>
            );
          })}
      </ul>

      <pre>{JSON.stringify(selectedParents, null, 2)}</pre>
      {/* <pre>{JSON.stringify(selectedChilds, null, 2)}</pre> */}
    </div>
  );
};

export default Test;
