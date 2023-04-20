import React, { useState } from 'react';
import Dropped from './Dropped';

const Item = ({ item, depth }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {item.submenus ? (
        <li className="item sub">
          <button onClick={() => setShow(p => !p)} href="#">
            {item.name}
          </button>
        </li>
      ) : (
        <li className="item">
          <a href="#"> {item.name}</a>
        </li>
      )}

      {item.submenus && (
        <Dropped submenus={item.submenus} show={show} depth={depth} />
      )}
    </>
  );
};

export default Item;
