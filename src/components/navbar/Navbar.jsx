import React, { useEffect, useState } from 'react';
import { BsPersonCircle, BsSearch } from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import navLogo from '../../assets/images/project/nav-logo.png';
import navInfo from '../../data/nav/nav.json';
import '../../styles/components/navbar.scss';
import { linkMaker } from '../../utils/utilExporter';

const icons = [
  { icon: <BsPersonCircle />, id: 1 },
  { icon: <BsSearch />, id: 3 },
  { icon: <MdAddShoppingCart />, id: 2 },
];

const Navbar = () => {
  const [bg, setBg] = useState('');
  const [hover, setHover] = useState('');

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > window.innerHeight) {
      setBg('green');
      setHover('blue');
    } else {
      setHover('');
      setBg('');
    }
  };

  const [menus, setMenus] = useState(null);
  const [ml, setMl] = useState(null);

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
    <div className="nav">
      <nav
        style={{
          backgroundColor: bg,
          '&:hover': {
            color: hover,
          },
        }}
      >
        <div className="navbar">
          <Link to="/" className="logo">
            <img src={navLogo} alt="navlogo" />
          </Link>

          <ul className="nav_section">
            <li className="nav_elements">
              <NavLink
                to={linkMaker('UZAKTAN EĞİTİM PAKETLERİ')}
                className="nav_element"
              >
                UZAKTAN EĞİTİM PAKETLERİ
              </NavLink>

              {Object.keys(navInfo).map((menu, i) => {
                return (
                  <NavLink
                    key={i}
                    onMouseEnter={setter}
                    onClick={() => setMenus(null)}
                    className="nav_element"
                    to="hakkimda/bazi/bilgiler"
                  >
                    {menu.toUpperCase().split('_').join(' ')}
                  </NavLink>
                );
              })}
            </li>
          </ul>
          {/* <SubMenus ml={ml} menus={navInfo[menus]} /> */}
          <GoThreeBars style={{ fontSize: '34px', color: 'white' }} />
        </div>
        <ul className="user-icons">
          {icons.map(({ icon, id }) => (
            <li key={id}>{icon}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
