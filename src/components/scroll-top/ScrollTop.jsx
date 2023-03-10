import React, { useState, useEffect, useRef } from 'react';
import './scroll.scss';
import { BsBoxArrowUp } from 'react-icons/bs';

const ScrollTop = () => {
  const [bar, setBar] = useState(false);

  const ref = useRef();

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > window.innerHeight / 2) {
      setBar(true);
    } else {
      setBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {bar ? (
        <button ref={ref} className="scroll-div" style={{ top: '10%' }}>
          <span>
            <BsBoxArrowUp />
          </span>
        </button>
      ) : null}
    </>
  );
};

export default ScrollTop;
