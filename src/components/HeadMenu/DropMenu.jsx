import React from 'react';
import MenuItem from './MenuItem';

const DropMenu = ({ submenus, depth, show }) => {
  depth = depth + 1;

  // console.log(submenus, show);

  return (
    <ul
      className={`dropdown ${depth > 1 ? 'submenu' : ''} ${show ? 'show' : ''}`}
    >
      {submenus.map((submenu, i) => (
        <MenuItem menu={submenu} key={i} depth={depth} />
      ))}
    </ul>
  );
};

export default DropMenu;
