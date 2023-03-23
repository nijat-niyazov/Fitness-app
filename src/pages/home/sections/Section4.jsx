import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import section4 from '../../../data/sections/section4.json';
import scrollOnAnimation from '../../../utils/functions/scrollAnimation';
import { lazyLoadImages } from '../../../utils/utilExporter';

const Section4 = () => {
  // ============ LazyLoader ===========
  lazyLoadImages('src');
  
  // ============ AOS ===========
  scrollOnAnimation('card', 'left');

  return (
    <section className="section-4">
      {section4.map(({ img, paket, link }, i) => {
        return (
          <Link key={i} to={'/' + link} className="card">
            <img
              src={''}
              data-src={img}
              alt="first"
              width="auto"
              height="auto"
            />
            <div className="info">
              <h4>{paket}</h4>
              <span to="/egitim paketleri">
                Incele <AiOutlineDoubleRight style={{ marginLeft: '5px' }} />
              </span>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Section4;
