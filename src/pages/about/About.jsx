import React from 'react';
import { useTitleSetter } from '../../utils/exporter';

const About = () => {
  useTitleSetter('About me');

  return (
    <div>
      <h2 style={{ color: 'black' }}>Soon About page will be created</h2>
    </div>
  );
};

export default About;
