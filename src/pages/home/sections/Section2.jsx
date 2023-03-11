import services from '../../../../public/data/section2.json';
import { fading } from '../../../utils/exporter';

const Section2 = () => {
  fading();

  return (
    <section
      className="section-2"
      data-aos="fade-up"
      data-aos-offset="1050"
      data-aos-duration="60000"
    >
      <article className="info">
        <h1>PROFESYONEL ÇALIŞMA PROGRAMI</h1>
        <ul className="bar-dot">
          <li>Analiz</li>
          <li>Kişiye Özel Plan</li>
          <li>Profesyonel Koçluk</li>
          <li>Mobil Takip Sistemi</li>
          <li>İlerleme Raporu</li>
        </ul>
      </article>
      <ul className="services">
        {services.map(({ service }, i) => (
          <li key={i}>{service}</li>
        ))}
      </ul>
    </section>
  );
};

export default Section2;
