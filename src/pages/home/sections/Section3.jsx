import section3 from '../../../data/sections/section3.json';
import Highlight from '../../../features/regexp-highlight/Highlight';
import scrollOnAnimation from '../../../utils/functions/scrollAnimation';
import { lazyLoadImages } from '../../../utils/utilExporter';

// import lazyLoader from '../../../utils/functions/lazyLoadImg';

const Section3 = () => {
  // ============ LazyLoader ===========
  lazyLoadImages();

  // ============ AOS ===========
  scrollOnAnimation('odd', 'right');
  scrollOnAnimation('even', 'left');
  const text = '#VÜCUT-ŞEKLİNİ DEĞİŞTİR SAYAS';

  return (
    <section className="section-3">
      {section3.map(({ img, slogan, slogan2, description, button }, i) => {
        const secIndex = slogan.indexOf(' ', slogan.indexOf(' ') + 1);

        return (
          <div
            key={i}
            className={'box ' + ((i + 1) % 2 !== 0 ? 'odd' : 'even')}
          >
            <article>
              <h2>
                <Highlight
                  starter={'mentioning'}
                  starters={['mentioning', 'hashtag']}
                  context={slogan2}
                />
                {/* {slogan2} */}
                {/* </Highlight> */}
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
