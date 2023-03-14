import React from 'react';
import { Link } from 'react-router-dom';
import linkMaker from '../../utils/functions/linkMaker';

const SubItem = ({ subMenu }) => {
  return (
    <ul className="submenu-box">
      {subMenu?.map((childMenu, i) => {
        console.log(childMenu);
        return (
          <li className="koti" key={i}>
            {childMenu}
          </li>
        );
      })}
    </ul>
  );
};

export default SubItem;
