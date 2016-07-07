/* eslint-disable no-unused-vars*/
import { h } from 'preact';
/* eslint-enable no-unused-vars*/

// `preact-router` has a <Link> component just like `react-router`
// However `preact-router` will automatically try to handle <a> tags so
// using <Link> is not required.
import { Link } from 'preact-router';

import styles from './styles/';
const Navbar = () => (
  <nav className={styles}>
    <ol>
      <li>
        <Link href={'/'}>{'Home'}</Link>
      </li>
      <li>
        <Link href={'/about/'}>{'About'}</Link>
      </li>
      <li>
        <Link href={'/fourzerofour/'}>{'Bad Link'}</Link>
      </li>
    </ol>
  </nav>
);

export default Navbar;
