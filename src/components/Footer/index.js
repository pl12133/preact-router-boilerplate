/* eslint-disable no-unused-vars */
import { h } from 'preact';
/* eslint-enable no-unused-vars */

import { FontAwesome } from 'components/';
import styles from './styles/';
const Footer = () => (
  <div className={styles}>
    <footer>
      <span>{'Thanks for visitting! '}<FontAwesome name={'heart'} /></span>
    </footer>
  </div>
);

export default Footer;
