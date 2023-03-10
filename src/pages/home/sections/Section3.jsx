import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MY from '../../../assets/images/project/my.jpg';
import GL from '../../../assets/images/project/gulsah.jpg';

const Section3 = () => {
  return (
    <section className="section-3">
      <div className="box">
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

      <div className="box">
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
