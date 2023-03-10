import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MY from '../../../assets/images/project/my.jpg';
import GL from '../../../assets/images/project/gulsah.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Section3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="section-3">
      <div
        className="box"
        data-aos="fade-up"
        data-aos-offset="1150"
        data-aos-duration="60000"
      >
        <article>
          <h2>
            VÜCUT <span> ŞEKLİNİ </span> <br />
            DEĞİŞTİR
          </h2>

          <h6>
            SAĞLIKLI VE FİT BİR VÜCUDA SAHİP OL // Azalan yağ kütlesini, artan
            kas gücü ve dayanıklılık Yüksek enerji ve güçlü bağışıklık sistemi
            // Anksiyete, stres, gerginlik ve depresyondan uzak bir yaşam tarzı
            ile tanış
          </h6>
          <button>
            <span>Simdi Uye Ol</span>
          </button>
        </article>
        <LazyLoadImage alt={'mustafa'} src={MY} />
      </div>

      <div className="box" data-aos="fade-up" data-aos-offset="1350">
        <LazyLoadImage alt={'gulsah'} src={GL} />
        <article>
          <h2>
            <span> BEGREEN APP </span>
            İLE <br /> TAM PERFORMANS
          </h2>
          <h6>
            Tüm Süreçlerinizde ihtiyacınız olan her şey her an yanınızda.
            Gelişmiş özelliklere sahip BE GREEN APP üzerinden planlarınızı takip
            edebilir. Profesyonel koçunuzdan tam destek alabilirsiniz. BE GREEN
            APP ile ilerlemeniz her gün kontrol altında.
          </h6>

          <button>
            <span>UCretsiz indirin</span>
          </button>
        </article>
      </div>
    </section>
  );
};

export default Section3;
