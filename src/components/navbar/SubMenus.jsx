import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { linkMaker } from '../../utils/exporter';

const SubMenus = () => {
  const [finder, setfinder] = useState(null);

  const beGreenWear = [
    {
      main: 'AMİNO ASİTLER',

      submenus: ['a', 'b', 'c'],
    },
    {
      main: 'AVANTAJLI SUPPLEMENT PAKETLERİ',
    },
    {
      main: 'YAĞ YAKICILAR – KİLO VERME',

      submenus: ['d', 'e', 'f', 'g'],
    },
  ];

  useEffect(() => {
    console.log(finder);
    const subs = beGreenWear.find(obj => {
      return obj.main === finder;
    })?.submenus;

    console.log(subs);
  }, [finder]);

  return (
    <div>
      <ul
        className="category-box"
        style={{
          left: 500 + 'px',
          transform: 'translateX(-50%)',
          transition: 'all 0.3s',
        }}
      >
        {beGreenWear.map((menu, i) => {
          if (menu.submenus === undefined) {
            return (
              <li className="cat without-subs" key={i}>
                <Link to={'be-green-wear/' + linkMaker(menu.main)}>
                  <span onMouseEnter={e => setfinder(e.target.innerHTML)}>
                    {menu.main}
                  </span>
                </Link>
              </li>
            );
          }
          return (
            <li className="cat with-subs" key={i}>
              <Link to={'be-green-wear/' + linkMaker(menu.main)}>
                <span onMouseEnter={e => setfinder(e.target.innerHTML)}>
                  {menu.main} {'-->'}
                </span>
                <span>{'-->'}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubMenus;
