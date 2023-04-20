import Item from './Item';

const Dropped = ({ submenus, show, depth }) => {
  // depth = depth + 1;

  // const depthClass = depth > 1 ? 'submenu' : '';

  return (
    <ul className={`dropped ${show ? 'show' : ''}`}>
      {submenus.map((submenu, i) => {
        return <Item item={submenu} key={i} depth={depth} />;
      })}
    </ul>
  );
};

export default Dropped;
