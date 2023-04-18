import React from 'react';
import Item from './Item';
import { menuItems } from './menuItems';
import { menuCats } from './menuCats';
import './style.scss';

const Navbar = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="" className="logo">
          Logo
        </a>
        <nav>
          <ul className="nav-sec">
            {menuItems.map((menu, i) => {
              const depth = 0;
              return <Item depth={depth} key={i} item={menu} />;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
