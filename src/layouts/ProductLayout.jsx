import { Outlet } from 'react-router-dom';
import { UpperLinks } from '../components/comExporter';
import '../styles/products/products.scss';

const ProductsLayout = () => {
  return (
    <>
      <UpperLinks />
      <Outlet />
    </>
  );
};

export default ProductsLayout;
