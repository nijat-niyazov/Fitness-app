import Helmet from 'react-helmet';

const HelmetComponent = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetComponent;
