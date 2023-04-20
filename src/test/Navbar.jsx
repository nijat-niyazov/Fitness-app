import Item from './Item';
import { menuItems } from './menuItems';
import './style.scss';

const Navbar = () => {
  return (
    <div className="nav-area">
      <a href="" className="logo">
        Logo
      </a>
      <ul className="nav-sec">
        {menuItems.map((menu, i) => {
          const depth = 0;
          return <Item depth={depth} key={i} item={menu} />;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
