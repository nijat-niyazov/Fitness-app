import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import section3 from '../../../data/sections/section3.json';
import { fading } from '../../../utils/exporter';

const Section3 = () => {
  fading();

  return (
    <section className="section-3">
      {section3.map(({ img, slogan, description, button }, i) => {
        const secIndex = slogan.indexOf(' ', slogan.indexOf(' ') + 1);

        return (
          <div
            key={i}
            className="box"
            data-aos="fade-up"
            data-aos-offset={i === 0 ? '1150' : '1350'}
            data-aos-duration="60000"
          >
            <article>
              <h2>
                <span>
                  {slogan.slice(0, secIndex)} <br />
                </span>
                {slogan.slice(secIndex + 1)}
              </h2>

              <h6>{description}</h6>
              <button>
                <span>{button}</span>
              </button>
            </article>
            <LazyLoadImage src={img} alt="traniner" />
          </div>
        );
      })}
    </section>
  );
};

export default Section3;
