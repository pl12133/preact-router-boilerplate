/* eslint-disable no-unused-vars */
import { h } from 'preact';
/* eslint-enable no-unused-vars */

import { FontAwesome } from 'components/';

import styles from './styles/';
const WelcomeCaption = () => (
  <div className={styles}>
    <header>
      <h1>
        {'Your Heading!'}
      </h1>
      <p>{'Subheading!'}</p>
    </header>
    <div>
      <p>{'Preact Router Boilerplate'}</p>
      <a href={'https://github.com/pl12133/preact-router-boilerplate/'}>
        <FontAwesome
          name={'github'}
          size={'3x'}
        />
      </a>
    </div>
  </div>
);

export default WelcomeCaption;
