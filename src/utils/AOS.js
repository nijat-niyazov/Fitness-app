import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const fading = () => {
  useEffect(() => {
    AOS.init();
  }, []);
};

export default fading;
