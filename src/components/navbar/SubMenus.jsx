import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { linkMaker } from '../../utils/exporter';
import SubItem from './SubItem';

const SubMenus = ({ ml, menus }) => {
  const [finder, setfinder] = useState(null);
  const [subMenu, setsubMenu] = useState(undefined);

  useEffect(() => {
    setsubMenu(menus?.find(obj => obj.main === finder)?.submenus);
  }, [finder]);

  useEffect(() => {
    console.log(finder, subMenu);
  }, [finder, subMenu]);

  return (
    menus?.length !== 0 && (
      <>
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
                className={
                  menu.submenus ? 'category withS' : 'category withoutS'
                }
                key={i}
              >
                <Link to={'be-green-wear/' + linkMaker(menu.main)}>
                  <span
                    className={
                      menu.submenus ? 'span withChild' : 'span withoutChild'
                    }
                    onMouseEnter={e => setfinder(e.target.innerHTML)}
                    onClick={() => setfinder(null)}
                  >
                    {menu.main}
                  </span>
                  {menu.submenus && subMenu !== undefined && (
                    <SubItem subMenu={subMenu} />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* {(subMenu !== null || undefined) && <SubItem subMenu={subMenu} />} */}
      </>
    )
  );
};

export default SubMenus;
