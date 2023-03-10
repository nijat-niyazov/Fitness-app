import React, { useEffect } from 'react';
import services from '../../../../public/data/section2.json';

const Section2 = () => {
  console.log(services);

  return (
    <section className="second-view">
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
