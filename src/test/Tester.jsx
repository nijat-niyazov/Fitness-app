import { useState } from 'react';
import { categories } from './categories';

const Tester = () => {
  const [newParent, setNewParent] = useState(0);
  const [selectedParentsId, setSelectedParentsId] = useState([]);
  const [selectedChildsId, setSelectedChildsId] = useState([]);
  const [childCats, setChildCats] = useState([]);
  const [parentCats, setParentCats] = useState([]);

  const onlySubCats = addedParent =>
    categories.filter(p => p.parent === addedParent);

  const getFilteredCats = onlySubCats(newParent);
  // useEffect(() => {
  //   const childs = onlySubCats(newParent);
  //   setChildCats(childs);
  // }, [newParent]);

  console.log(
    newParent,
    onlySubCats(selectedParentsId.at(-1)),
    onlySubCats(selectedChildsId.at(-1))
  );
  
  console.log(
    newParent,
    onlySubCats(selectedParentsId.at(-1)),
    onlySubCats(selectedChildsId.at(-1))
  );

  return (
    <div>
      <ul>
        {selectedParentsId.length > 0 &&
          selectedParentsId.map((parentId, i) => {
            return (
              <div key={i}>
                {onlySubCats(parentId)?.map(cat => {
                  return (
                    <li
                      key={cat.id}
                      style={{
                        cursor: 'pointer',
                        marginLeft: '20px',
                        listStyle: 'none',
                      }}
                      onClick={() => {
                        setNewParent(cat.id);
                        setSelectedParentsId([
                          ...selectedParentsId.slice(i, 0),
                          cat.parent,
                        ]);
                        setSelectedChildsId([
                          ...selectedChildsId.slice(i, 0),
                          cat.id,
                        ]);
                      }}
                    >
                      {cat.name}
                    </li>
                  );
                })}
              </div>
            );
          })}
      </ul>

      <ul
        style={{
          marginLeft: '20px',
          background: 'pink',
          listStyle: 'none',
        }}
      >
        {getFilteredCats.map(cat => {
          return (
            <li
              key={cat.id}
              onClick={() => {
                setNewParent(cat.id);
                setSelectedParentsId(p => [...p, cat.parent]);
                setSelectedChildsId(c => [...c, cat.id]);
              }}
            >
              {cat.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tester;
