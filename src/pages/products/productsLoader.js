import axios from 'axios';

const productsLoader = async () => {
  try {
    const { data } = await axios.get('data/products/products.json');
    if (data) {
      return data;
    }
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};
export default productsLoader;
