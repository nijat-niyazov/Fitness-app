import { useEffect } from 'react';

const options = {
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.5,
};

const scrollOnAnimation = (attribute, className) => {
  const elementObserver = new IntersectionObserver((entries, self) => {
    entries.forEach(e => {
      if (!e.isIntersecting) {
        return;
      } else {
        e.target.classList.add(className);
        self.unobserve(e.target);
      }
    });
  }, options);

  useEffect(() => {
    const nodeList = document.querySelectorAll(`.${attribute}`);

    nodeList?.forEach(element => elementObserver.observe(element));

    return () => {
      nodeList?.forEach(element => elementObserver.unobserve(element));
    };
  }, []);
};

export default scrollOnAnimation;
