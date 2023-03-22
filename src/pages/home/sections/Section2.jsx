import services from '../../../data/sections/section2.json';
import scrollOnAnimation from '../../../utils/functions/scrollAnimation';

const Section2 = () => {
  // ============ AOS ===========
  scrollOnAnimation('section-2', 'show');

  return (
    <section className="section-2">
      <article className="info">
        <h1 className="title">PROFESYONEL ÇALIŞMA PROGRAMI</h1>
        <ul className="bar-dot">
          <li className="bar-sec">Analiz</li>
          <li className="bar-sec">Kişiye Özel Plan</li>
          <li className="bar-sec">Profesyonel Koçluk</li>
          <li className="bar-sec">Mobil Takip Sistemi</li>
          <li className="bar-sec">İlerleme Raporu</li>
        </ul>
      </article>
      <ul className="services">
        {services.map(({ service }, i) => (
          <li className="service" key={i}>
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section2;
