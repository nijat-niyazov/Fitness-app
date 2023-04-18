import React, { useState } from 'react';
import Dropped from './Dropped';

const Item = ({ item, depth }) => {
  const [show, setShow] = useState(false);

  return (
    <li className="item">
      {item.submenus ? (
        <React.Fragment>
          <button type="button" onClick={() => setShow(p => !p)}>
            {item.name}
            {depth > 0 ? <span> ➕</span> : <span className="nothing" />}
          </button>
          <Dropped submenus={item.submenus} show={show} depth={depth} />
        </React.Fragment>
      ) : (
        <a href="#">{item.name}</a>
      )}
    </li>
  );
};

export default Item;
