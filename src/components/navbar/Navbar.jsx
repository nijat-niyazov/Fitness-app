import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navLogo from '../../assets/images/project/nav-logo.png';
import '../../styles/components/navbar.scss';
import { BsPersonCircle, BsSearch } from 'react-icons/bs';
import { MdAddShoppingCart } from 'react-icons/md';
import Bar from '../progressBar/ProgressBar';
import ProgressBar from '../progressBar/ProgressBar';

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
              <NavLink className="nav_element">BE GREEN WEAR</NavLink>
              <NavLink className="nav_element">SUPPLEMENT MARKET</NavLink>
              <NavLink className="nav_element">SPOR EKİPMANLARI</NavLink>
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
    </div>
  );
};

export default Navbar;
