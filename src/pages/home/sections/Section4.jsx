import { Link } from 'react-router-dom';
import section4 from '../../../data/sections/section4.json';
import { fading, lazyLoadImages } from '../../../utils/exporter';
import { AiOutlineDoubleRight } from 'react-icons/ai';

const Section4 = () => {
  fading();

  lazyLoadImages();
  return (
    <section
      className="section-4"
      data-aos="fade-up"
      data-aos-offset="1350"
      data-aos-duration="60000"
    >
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
