import { useState } from 'react';
import MY from '../../assets/images/project/welcome-img.png';
import { ScrollTop } from '../../components/comExporter';
import '../../styles/pages/home.scss';
import { Section2, Section3, Section4 } from './sections/sections';

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="home">
      <img src={MY} alt="Coach" onLoad={handleImageLoad} />
      <ScrollTop />
      {imageLoaded && (
        <>
          <Section2 />
          <Section3 />
          <Section4 />
        </>
      )}
    </div>
  );
};

export default Home;
