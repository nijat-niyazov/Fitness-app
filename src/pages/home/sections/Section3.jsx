import section3 from '../../../data/sections/section3.json';
import scrollOnAnimation from '../../../utils/functions/scrollAnimation';
import { lazyLoadImages } from '../../../utils/utilExporter';

// import lazyLoader from '../../../utils/functions/lazyLoadImg';

const Section3 = () => {
  // ============ LazyLoader ===========
  lazyLoadImages();

  // ============ AOS ===========
  scrollOnAnimation('odd', 'right');
  scrollOnAnimation('even', 'left');

  return (
    <section className="section-3">
      {section3.map(({ img, slogan, description, button }, i) => {
        const secIndex = slogan.indexOf(' ', slogan.indexOf(' ') + 1);

        return (
          <div
            key={i}
            className={'box ' + ((i + 1) % 2 !== 0 ? 'odd' : 'even')}
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
            <img
              src={''}
              data-src={img}
              alt="trainer"
              width={500}
              height={250}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Section3;
