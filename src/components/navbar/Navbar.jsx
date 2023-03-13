import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navLogo from '../../assets/images/project/nav-logo.png';
import '../../styles/components/navbar.scss';
import { BsPersonCircle, BsSearch } from 'react-icons/bs';
import { MdAddShoppingCart } from 'react-icons/md';
import ProgressBar from '../progressBar/ProgressBar';
import NavWear from './NavWear';

const icons = [
  { icon: <BsPersonCircle />, id: 1 },
  { icon: <BsSearch />, id: 3 },
  { icon: <MdAddShoppingCart />, id: 2 },
];

const Navbar = () => {
  const [bg, setBg] = useState('');
  const [hover, setHover] = useState('');
  const [alt, setAlt] = useState(null);
  const [cat, setCat] = useState(null);
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
    setAlt(e.target.innerHTML.toLowerCase().replaceAll(' ', '_'));
    setMl(
      (e.target.getBoundingClientRect().right +
        e.target.getBoundingClientRect().left) /
        2
    );
    // console.log(e.target.getBoundingClientRect());
  };

  // useEffect(() => {
  //   console.log(alt);
  //   console.log(cat);
  //   console.log(ml);
  // }, [alt, cat, ml]);

  // const category = useMemo(() => setCat(alt), [alt]);

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
              <NavLink
                // onMouseLeave={() => setAlt(null)}
                onMouseOver={setter}
                className="nav_element"
              >
                BE GREEN WEAR
              </NavLink>
              <NavLink
                onMouseOver={setter}
                // onMouseLeave={() => setAlt(null)}
                className="nav_element"
              >
                SUPPLEMENT MARKET
              </NavLink>
              <NavLink
                onMouseOver={setter}
                // onMouseLeave={() => setAlt(null)}
                className="nav_element"
              >
                SPOR EKİPMANLARi
              </NavLink>
              <NavLink className="nav_element" to="about">
                MUSTAFA YILDIZ KİMDİR ?
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="user-icons">
          {icons.map(({ icon, id }) => (
            <li key={id}>{icon}</li>
          ))}
        </ul>
      </nav>
      <NavWear category={alt} ml={ml} />
    </div>
  );
};

export default Navbar;
