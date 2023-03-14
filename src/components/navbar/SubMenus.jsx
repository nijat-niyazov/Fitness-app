import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { linkMaker } from '../../utils/exporter';
import SubItem from './SubItem';

const SubMenus = ({ ml, menus }) => {
  const [finder, setfinder] = useState(null);
  const [subMenu, setsubMenu] = useState(undefined);

  console.log(menus);

  useEffect(() => {
    setsubMenu(menus?.find(obj => obj.main === finder)?.submenus);
  }, [finder]);

  useEffect(() => {
    if (subMenu !== undefined) {
    }
  }, [subMenu]);

  return (
    menus && (
      <div className="okay" style={{ position: 'relative' }}>
        <ul
          className="category-box"
          style={{
            left: ml + 'px',
            transform: 'translateX(-50%)',
            transition: 'all 0.3s',
          }}
        >
          {menus?.map((menu, i) => {
            return (
              <li
                className={menu.submenus ? 'cat with' : 'cat without'}
                key={i}
              >
                <Link to={'be-green-wear/' + linkMaker(menu.main)}>
                  <span
                    className={menu.submenus ? 'spanwith' : 'spanwithout'}
                    onMouseEnter={e => setfinder(e.target.innerHTML)}
                    onMouseLeave={() => setfinder(null)}
                  >
                    {menu.main}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        {(subMenu !== null || undefined) && <SubItem subMenu={subMenu} />}
      </div>
    )
  );
};

export default SubMenus;
