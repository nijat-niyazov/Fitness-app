import { useEffect } from 'react';

const options = {
  rootMargin: '50px',
  thresold: 0.5,
};

const srcChanger = target => {
  const dataSrc = target.getAttribute('data-src');
  if (!dataSrc) {
    return;
  } else {
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

const lazyLoadImages = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-src]');

    elements?.forEach(imgEl => intersector.observe(imgEl));

    return () => {
      elements?.forEach(imgEl => intersector.unobserve(imgEl));
    };
  }, []);
};

export default lazyLoadImages;
