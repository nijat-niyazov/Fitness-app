import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import navEls from '../../data/nav/nav.json';
import '../../styles/components/navbar.scss';
import linkMaker from '../../utils/linkMaker';
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

  const [biy, setBiy] = useState(null);

  const beGreenWear = [
    {
      'BE GREEN KOLYE': ['a', 'b', 'c'],
    },
    {
      'BE GREEN ÖĞÜN ÇANTALARI': [],
    },
    {
      GREEN: ['d', 'e', 'f'],
    },
  ];

  const allMenus = beGreenWear.map(obj => Object.keys(obj)[0]);
  // console.log(allMenus);

  const menus = beGreenWear.filter(obj => Object.values(obj)[0].length > 0);

  useEffect(() => {
    console.log(biy);
    const finded = menus.find(obj => Object.keys(obj)[0] === biy);
    console.log(finded);
  }, [biy]);

  const menusWithSubs = beGreenWear
    .filter(obj => Object.values(obj)[0].length > 0)
    .map(obj => Object.keys(obj)[0]);

  // console.log(menusWithSubs);

  // console.log(allMenus.map(menu => menusWithSubs.includes(menu)));

  return category !== null ? (
    <ul
      className="category-box"
      style={{
        left: ml + 'px',
        transform: 'translateX(-50%)',
        transition: 'all 0.3s',
      }}
    >
      {allMenus?.map((cat, i) => (
        <SubItem cat={cat} key={i} setBiy={setBiy} />
      ))}
    </ul>
  ) : null;
};

export default memo(NavWear);
