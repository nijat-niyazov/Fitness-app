import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import section4 from '../../../../public/data/section4.json';
import { fading } from '../../../utils/exporter';
import { AiOutlineDoubleRight } from 'react-icons/ai';

const Section4 = () => {
  fading();

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
            <LazyLoadImage src={img} alt="first" />
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
