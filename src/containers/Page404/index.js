/* eslint-disable no-unused-vars */
import { h } from 'preact';
/* eslint-enable no-unused-vars */

// This is the default route for `preact-router`, when no other route matches.
import styles from './styles/';
const Page404 = () => (
  <div className={styles}>
    <h1>{'Error 404'}</h1>
    <p>{'This page was not found'}</p>
  </div>
);

export default Page404;
