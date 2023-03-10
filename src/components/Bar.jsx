import React, { useEffect, useState } from 'react';

const Bar = () => {
  const [bar, setBar] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    setBar(Math.ceil((scrollY / (pageHeight - window.innerHeight)) * 100));
    if (scrollY === pageHeight - window.innerHeight) {
      console.log('Reached the bottom of the page!');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // console.log(bar);

  return (
    <div
      style={{
        backgroundColor: 'white',
        display: 'block',
        width: '100%',
        textAlign: 'center',
        height: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="bar"
    >
      <span
        style={{
          backgroundColor: 'red',
          display: 'inline-block',
          height: '10px',
          width: bar + '%',
          borderRadius: '20px',
        }}
      ></span>
    </div>
  );
};

export default Bar;
