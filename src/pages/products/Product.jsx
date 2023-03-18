import { useParams } from 'react-router-dom';

const Product = () => {
  const { productName } = useParams();

  console.log(productName);

  return (
    <section className="product">
      <h2>Welcome </h2>
    </section>
  );
};

export default Product;
