import axios from 'axios';

const aboutLoader = async () => {
  try {
    const { data } = await axios.get('data/about/about.json');
    console.log('seem wrong');
    if (data) {
      return data;
    }
  } catch (err) {
    return err.message;
  }
};
export default aboutLoader;
