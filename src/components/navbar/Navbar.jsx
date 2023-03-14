import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navLogo from '../../assets/images/project/nav-logo.png';
import '../../styles/components/navbar.scss';
import { BsPersonCircle, BsSearch } from 'react-icons/bs';
import { MdAddShoppingCart } from 'react-icons/md';
import ProgressBar from '../progressBar/ProgressBar';
import SubMenus from './SubMenus';
import navInfo from '../../data/nav/nav.json';

const icons = [
  { icon: <BsPersonCircle />, id: 1 },
  { icon: <BsSearch />, id: 3 },
  { icon: <MdAddShoppingCart />, id: 2 },
];

const Navbar = () => {
  const [bg, setBg] = useState('');
  const [hover, setHover] = useState('');

  const [menus, setMenus] = useState(null);
  const [ml, setMl] = useState(null);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > window.innerHeight) {
      setBg('green');
      setHover('red');
    } else {
      setHover('');
      setBg('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setter = e => {
    setMenus(e.target.innerHTML.toLowerCase().replaceAll(' ', '_'));
    setMl(
      (e.target.getBoundingClientRect().right +
        e.target.getBoundingClientRect().left) /
        2
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        width: '100%',
      }}
    >
      <nav
        style={{
          backgroundColor: bg,
          '&:hover': {
            color: 'red',
          },
        }}
      >
        <div className="left-side">
          <Link to="/" className="logo">
            <img src={navLogo} alt="navlogo" />
          </Link>
          <ul className="nav_section">
            <li
              style={{
                '&:hover': {
                  color: 'red',
                },
              }}
              className="nav_elements"
            >
              <NavLink className="nav_element">
                UZAKTAN EĞİTİM PAKETLERİ
              </NavLink>

              {Object.keys(navInfo).map((menu, i) => {
                return (
                  <NavLink
                    key={i}
                    onMouseEnter={setter}
                    onClick={() => setMenus(null)}
                    className="nav_element"
                  >
                    {menu.toUpperCase().split('_').join(' ')}
                  </NavLink>
                );
              })}
            </li>
          </ul>
        </div>
        <ul className="user-icons">
          {icons.map(({ icon, id }) => (
            <li key={id}>{icon}</li>
          ))}
        </ul>
      </nav>
      <SubMenus ml={ml} menus={navInfo[menus]} />
    </div>
  );
};

export default Navbar;
