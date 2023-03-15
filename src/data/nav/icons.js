import { BsPersonCircle, BsSearch } from 'react-icons/bs';
import { MdAddShoppingCart } from 'react-icons/md';

const icons = [
  { icon: <BsPersonCircle />, id: 1 },
  { icon: <BsSearch />, id: 3 },
  { icon: <MdAddShoppingCart />, id: 2 },
];

const IconUs = () => {
  return (
    <ul className="user-icons">
      {icons.map(({ icon, id }) => (
        <li key={id}>{icon}</li>
      ))}
    </ul>
  );
};

export default IconUs;
