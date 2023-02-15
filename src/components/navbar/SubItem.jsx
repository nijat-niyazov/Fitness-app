import React from 'react';
import { Link } from 'react-router-dom';
import linkMaker from '../../utils/functions/linkMaker';

const SubItem = ({ cat, setBiy }) => {
  return (
    <li className="cat">
      <Link
        to={'be-green-wear/' + linkMaker(cat)}
        onMouseOver={e => setBiy(e.target.innerHTML)}
      >
        {cat}
      </Link>
    </li>
  );
};

export default SubItem;
