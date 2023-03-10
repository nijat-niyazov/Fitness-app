import React, { useState, useEffect } from 'react';
import './scroll.scss';
import { BsBoxArrowUp } from 'react-icons/bs';

const ScrollTop = () => {
  const [bar, setBar] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > window.innerHeight / 2) {
      setBar(true);
    } else {
      setBar(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {bar ? (
        <button
          onClick={scrollToTop}
          className="scroll-div"
          style={{ top: '10%' }}
        >
          <span>
            <BsBoxArrowUp />
          </span>
        </button>
      ) : null}
    </>
  );
};

export default ScrollTop;
