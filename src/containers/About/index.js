/* eslint-disable no-unused-vars */
import { h } from 'preact';
/* eslint-enable no-unused-vars */

import { LoremIpsum } from 'components/';

import styles from './styles/';
const About = () => {
  return (
    <div className={styles}>
      <LoremIpsum numLines={16} />
    </div>
  );
};

export default About;
