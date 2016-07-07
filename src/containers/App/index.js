/* eslint-disable no-unused-vars*/
import { h } from 'preact';
/* eslint-enable no-unused-vars*/

// The entire App is a Navbar, the Main Content, and a Footer
// The main content will change dynamically using <Routes> from `preact-router`
import Routes from 'routes/';
import { Navbar, Footer } from 'components/';

import styles from './styles/';
const App = () => (
  <div className={styles}>
    <Navbar />
    <main>
      <Routes />
    </main>
    <Footer />
  </div>
);

export default App;
