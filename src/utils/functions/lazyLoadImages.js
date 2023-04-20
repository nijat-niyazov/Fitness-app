import { useEffect, useState } from 'react';

const options = {
  rootMargin: '50px',
  thresold: 0.5,
};

const lazyLoadImages = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const srcChanger = target => {
    const dataSrc = target.getAttribute('data-src');
    if (!dataSrc) {
      return;
    } else {
      setIsLoaded(true);
      target.src = dataSrc;
    }
  };

  const intersector = new IntersectionObserver((elements, self) => {
    elements?.forEach(element => {
      if (!element.isIntersecting) {
        return;
      }

      srcChanger(element.target);
      self.unobserve(element.target);
    });
  }, options);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-src]');

    elements?.forEach(imgEl => intersector.observe(imgEl));

    return () => {
      elements?.forEach(imgEl => intersector.unobserve(imgEl));
    };
  }, []);

  return isLoaded;
};

export default lazyLoadImages;
