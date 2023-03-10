import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../../styles/pages/home.scss';
import MY from '../../assets/images/project/welcome-img.png';
import ScrollTop from '../../components/scroll-top/ScrollTop';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import services from '../../../public/data/section2.json';

import { useInView, InView } from 'react-intersection-observer';

const Home = () => {
  useEffect(() => window.scrollTo({ top: 0 }), []);

  // const refs = useRef([]);

  // // if (refs.current.length !== services.length) {
  // //   console.log('its different');
  // //   refs.current = Array(services.length)
  // //     .fill()
  // //     .map((_, i) => refs.current[i] || useRef(null));
  // // }

  // // console.log(refs);

  // const [seen, setSeen] = useState(false);

  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0.5,
  // });

  // console.log(ref.current);

  // useEffect(() => {
  //   inView ? setSeen(true) : setSeen(false);
  // }, [inView]);

  // useEffect(() => {
  //   console.log(inView, seen);
  // }, [seen]);

  const ref = useRef();
  const { ref: inViewRef, inView } = useInView();

  // console.log(services);

  const setRefs = useCallback(
    node => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  // console.log(setRefs, inView);

  return (
    <>
      <img src={MY} alt="Coach" />
      <ScrollTop />
      <Section2 />
      <Section3 />
      {/* <div className="container">
        <div className="card"></div>
        <div className="card"></div>
        <div ref={ref} className={seen ? 'card no' : ' card '}></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div> */}
      {/* <div ref={setRefs} style={{ color: 'white' }}>
        Shared ref is visible: <span style={{ color: 'white' }}>{inView}</span>
      </div>
      ; */}
      {/* <div className="container">
        {services.map((item, i) => (
          <div className="card" key={i} ref={el => (refs.current[i] = el)}>
            <p> {item.service} </p>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Home;
