import { Skeleton, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import HelmetComponent from '../../components/meta-tags/Helmet';
import data from '../../data/about/about.json';
import Highlight from '../../features/regexp-highlight/Highlight';
import '../../styles/pages/about.scss';
import { lazyLoadImages } from '../../utils/utilExporter';

const About = () => {
  const test = lazyLoadImages();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   console.log(test);
  // }, [test]);

  function handleImageLoad() {
    setLoading(false);
  }

  return (
    <section className="about">
      <HelmetComponent title="Mustafa Yildiz Kimdir?" />

      {/* <Highlight starter={'ayir'}>
        umarim her sey #yolundadir #kankacim #kafalara abone olmayi ve @like
        ayiratmayi unutmayin
      </Highlight> */}

      <header>
        <h2>HAKKIMDA</h2>
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
          return test ? (
            <Stack key={i} padding={4} spacing={1}>
              <Skeleton height="20px" isLoaded>
                <div className="card">
                  <img
                    onLoad={handleImageLoad}
                    src=""
                    data-src={img}
                    alt="gallery_photo"
                    className="gallery_photo"
                  />
                  <AiOutlineCamera className="camera" />
                </div>
              </Skeleton>
            </Stack>
          ) : (
            <div key={i} className="card">
              <img
                onLoad={handleImageLoad}
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
