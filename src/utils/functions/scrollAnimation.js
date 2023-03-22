import { useEffect } from 'react';

const options = {
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.2,
};

const scrollOnAnimation = (attribute, className) => {
  const elementObserver = new IntersectionObserver((entries, self) => {
    entries.forEach(e => {
      if (!e.isIntersecting) {
        return;
      } else {
        e.target.classList.add(className);
        console.log('it did from ' + className);

        self.unobserve(e.target);
      }
    });
  }, options);

  useEffect(() => {
    const secEl = document.querySelectorAll(`.${attribute}`);

    secEl?.forEach(element => elementObserver.observe(element));

    return () => {
      secEl?.forEach(element => elementObserver.unobserve(element));
    };
  }, []);
};

export default scrollOnAnimation;
