import { BsPersonCircle, BsSearch } from 'react-icons/bs';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import navLogo from '../../assets/images/project/nav-logo.png';
import MenuItem from './MenuItem';
import { menuCats } from './menuCats';
import './navbar.scss';

const icons = [
  { icon: <BsPersonCircle />, id: 1 },
  { icon: <BsSearch />, id: 3 },
  { icon: <MdAddShoppingCart />, id: 2 },
];

const Navbarr = () => {
  return (
    <nav>
      <section className="menu">
        <Link to="/" className="logo">
          <img src={navLogo} alt="navlogo" />
        </Link>

        <ul className="nav_elements">
          {menuCats.map((menu, i) => {
            const depth = 0;
            return <MenuItem depth={depth} menu={menu} key={i} />;
          })}
        </ul>
      </section>

      <ul className="action-icons">
        {icons.map(({ id, icon }) => (
          <>
            <li key={id}>{icon}</li>
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Navbarr;
