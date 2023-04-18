import React, { useState } from 'react';
import DropMenu from './DropMenu';

const MenuItem = ({ menu, depth }) => {
  const [showSub, setShowSub] = useState(false);

  return (
    <li
      className="nav_element"
      onMouseEnter={() => setShowSub(true)}
      onMouseLeave={() => setShowSub(false)}
    >
      {menu.submenus ? (
        <React.Fragment>
          <button type="button">
            {menu.name}

            {depth > 0 ? <span>+</span> : null}
          </button>

          <DropMenu submenus={menu.submenus} show={showSub} depth={depth} />
        </React.Fragment>
      ) : (
        <a href="#">{menu.name}</a>
      )}
    </li>
  );
};

export default MenuItem;
