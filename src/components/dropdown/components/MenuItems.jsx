import React from 'react';
import Dropdown from './DropDown';

const MenuItems = ({ items }) => {
  console.log(items);

  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          {console.log(items)}
          <button type="button" aria-haspopup="menu">
            {items.title}
          </button>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <a href="/#">{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
