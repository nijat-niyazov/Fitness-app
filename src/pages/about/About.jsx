import { AiOutlineCamera } from 'react-icons/ai';
import data from '../../data/about/about.json';
import '../../styles/pages/about.scss';
import { lazyLoadImages, useTitleSetter } from '../../utils/utilExporter';

const About = () => {
  useTitleSetter('Hakkimda');
  lazyLoadImages();

  return (
    <section className="about">
      <header>
        <h2>HAKKIMDA</h2>
        {/* <BreadCrumbs /> */}
      </header>
      <div className="flex">
        <img src={data.img} data-src="" alt="mustafa-yaris" />
        <div className="info-section">
          <article>
            {data.about.split('.').map((sentence, dot) => {
              return (
                <p key={dot}>
                  - {sentence}. <br /> <br />
                </p>
              );
            })}
          </article>
          <div>
            <h4> IFBB PRO MUSTAFA YILDIZ BAŞARILAR VE ÖDÜLLER</h4>
            <article className="success-box">
              <h5 className="heading">YIL YARIŞMA DERECE</h5>
              <div>
                {data.success.map((success, i) => {
                  return (
                    <div key={i} className="success">
                      <span>{success.year}</span>
                      <span>{success.competition}</span>
                      <span>{success.place}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
          <div className="platforms-box"></div>
        </div>
      </div>

      <div className="gallery">
        {data.gallery.map((img, i) => {
          return (
            <div className="card" key={i}>
              <img
                src=""
                data-src={img}
                alt="gallery_photo"
                className="gallery_photo"
              />
              <AiOutlineCamera className="camera" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
