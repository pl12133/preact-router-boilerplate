/* eslint-disable no-unused-vars*/
import { h } from 'preact';
/* eslint-enable no-unused-vars*/

import { WelcomeCaption } from 'components/';

import styles from './styles/';
const Home = () => (
  <div className={styles}>
    <WelcomeCaption />
  </div>
);

export default Home;
