import { useEffect, useState } from 'react';
import { categories } from './categories';

const Test = () => {
  const [subCats, setSubCats] = useState([]);
  const [newParent, setNewParent] = useState(0);

  // const mainCats = categories.filter(c => c.parent === 0);

  const mainCats = categories.filter(c => c.parent === 0);

  useEffect(() => {
    setSubCats(categories.filter(c => c.parent === newParent));
  }, [newParent]);

  const boolean = id => categories.some(c => c.parent === id);

  return (
    <div>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        {mainCats.map(cat => {
          return (
            <>
              <li
                style={{ cursor: 'pointer', marginRight: '120px' }}
                key={cat.id}
                onClick={() => {
                  setNewParent(cat.id);
                }}
              >
                {cat.name}
              </li>
            </>
          );
        })}
      </ul>
      {subCats.length > 0 && (
        <ul className="pop-uver" style={{ listStyle: 'none' }}>
          {subCats.map(s => {
            return (
              <li key={s.id}>
                {s.name} {boolean(s.id) ? '+' : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Test;
