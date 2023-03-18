import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { linkMaker } from '../../utils/utilExporter';
import SubItem from './SubItem';

const SubMenus = ({ ml, menus }) => {
  const [finder, setfinder] = useState(null);
  const [subMenu, setsubMenu] = useState(undefined);

  useEffect(() => {
    setsubMenu(menus?.find(obj => obj.main === finder)?.submenus);
  }, [finder]);

  return (
    menus?.length !== 0 && (
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
              className={menu.submenus ? 'category withS' : 'category withoutS'}
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
              </Link>
              {menu.submenus &&
                menu.submenus === subMenu &&
                subMenu !== undefined && <SubItem subMenu={subMenu} />}
            </li>
          );
        })}
      </ul>
    )
  );
};

export default SubMenus;
