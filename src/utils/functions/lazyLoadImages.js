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

const lazyLoader = allImgElements => {
  const intersector = new IntersectionObserver((elements, self) => {
    elements?.forEach(element => {
      if (!element.isIntersecting) {
        return;
      }

      srcChanger(element.target);
      self.unobserve(element.target);
    });
  }, options);

  allImgElements?.forEach(imgEl => intersector.observe(imgEl));
};

const lazyLoadImages = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-src]');
    if (elements.length !== 0) {
      lazyLoader(elements);
    }
  }, []);
};

export default lazyLoadImages;
