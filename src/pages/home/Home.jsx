import React, { useEffect } from 'react';
import '../../styles/pages/home.scss';
import MY from '../../assets/images/project/welcome-img.png';
import ScrollTop from '../../components/scroll-top/ScrollTop';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';

const Home = () => {
  useEffect(() => window.scrollTo({ top: 0 }), []);

  return (
    <>
      <img src={MY} alt="Coach" />
      <ScrollTop />
      <Section2 />
      <Section3 />
    </>
  );
};

export default Home;
