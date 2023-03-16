import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
  const router = useLocation();
  let currentLink = '';
  const crumbs = router.pathname;

  return (
    <aside className="breadcrumbs">
      {crumbs.split('/').map((link, i) => {
        if (i === 0) {
          return (
            <div key={i} className="link">
              <Link to="/">
                <AiFillHome />
              </Link>
            </div>
          );
        } else {
          currentLink += `/${link}`;
          return (
            <div key={i} className="link">
              <Link to={currentLink}>
                {link.slice(0, 1).toUpperCase() + link.slice(1)}
              </Link>
            </div>
          );
        }
      })}
    </aside>
  );
};

export default BreadCrumbs;
