import React, { useEffect } from 'react';
import MY from '../../assets/images/project/welcome-img.png';
import { ScrollTop } from '../../components/comExporter';
import '../../styles/pages/home.scss';
import { Section2, Section3, Section4 } from './sections/sections';

const Home = () => {
  

  return (
    <div className="home">
      <img src={MY} alt="Coach" />
      <ScrollTop />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Home;
