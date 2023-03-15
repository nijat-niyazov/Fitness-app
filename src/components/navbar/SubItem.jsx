import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import linkMaker from '../../utils/functions/linkMaker';

const SubItem = ({ subMenu }) => {
  return (
    <ul className="submenu-box">
      {subMenu?.map((childMenu, i) => {
        console.log(childMenu);
        return (
          <Link to={'be-green-wear/' + linkMaker(childMenu)} key={i}>
            <li className="koti">
              <span>{childMenu} </span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default SubItem;
