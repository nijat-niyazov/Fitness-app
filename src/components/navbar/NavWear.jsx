import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import navEls from '../../data/nav/nav.json';
import '../../styles/components/navbar.scss';
import linkMaker from '../../utils/functions/linkMaker';
import SubItem from './SubItem';

const NavWear = ({ category, ml }) => {
  // "GYM PLAID / GÖMLEK SERİSİ",
  // "SPOR KORSE",
  // "OVERSİZE T-SHİRT",
  // "KAMUFLAJ FİLE T-SHİRT",
  // "KAPÜŞONLU HOODİE",
  // "KISA ŞORT",
  // "EŞOFMAN ALTI",
  // "ANTRENMAN ATLETİ",
  // "WOMEN TANK TOP",
  // "WASHED T-SHIRT",
  // "WASHED ŞORT",
  // "WASHED GYM TANK TOP",
  // "KADIN TAYT - BRA"

  // console.log('rendered');

  // const [biy, setBiy] = useState(null);

  // const beGreenWear = [
  //   {
  //     'BE GREEN KOLYE': ['a', 'b', 'c'],
  //   },
  //   {
  //     'BE GREEN ÖĞÜN ÇANTALARI': [],
  //   },
  //   {
  //     GREEN: ['d', 'e', 'f'],
  //   },
  // ];

  // const allMenus = beGreenWear.map(obj => Object.keys(obj)[0]);
  // // console.log(allMenus);

  // const menus = beGreenWear.filter(obj => Object.values(obj)[0].length > 0);

  // useEffect(() => {
  //   console.log(biy);
  //   const finded = menus.find(obj => Object.keys(obj)[0] === biy);
  //   console.log(finded);
  // }, [biy]);

  // const menusWithSubs = beGreenWear
  //   .filter(obj => Object.values(obj)[0].length > 0)
  //   .map(obj => Object.keys(obj)[0]);

  const [biy, setBiy] = useState(null);

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

      submenus: ['d', 'e', 'f'],
    },
  ];

  // const allMenus = beGreenWear.map(obj => Object.keys(obj)[0]);
  // // console.log(allMenus);

  // const menus = beGreenWear.filter(obj => Object.values(obj)[0].length > 0);

  // useEffect(() => {
  //   console.log(biy);
  //   const finded = menus.find(obj => Object.keys(obj)[0] === biy);
  //   console.log(finded);
  // }, [biy]);

  // const menusWithSubs = beGreenWear
  //   .filter(obj => Object.values(obj)[0].length > 0)
  //   .map(obj => Object.keys(obj)[0]);

  // return category !== null ? (
  //   <ul
  //     className="category-box"
  //     style={{
  //       left: ml + 'px',
  //       transform: 'translateX(-50%)',
  //       transition: 'all 0.3s',
  //     }}
  //   >
  //     {allMenus?.map((cat, i) => (
  //       <SubItem cat={cat} key={i} setBiy={setBiy} />
  //     ))}
  //   </ul>
  // ) : null;

  const [finder, setfinder] = useState(null);

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
                <span></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(NavWear);
