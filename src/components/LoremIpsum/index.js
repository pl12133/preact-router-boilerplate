/* eslint-disable no-unused-vars*/
import { h } from 'preact';
/* eslint-enable no-unused-vars*/

// This component creates multiple lines of random Lorem Ipsum text. Using
// dummy data from JSON files during development can help prototype faster
import LOREM_IPSUM from './loremIpsum.json';

import styles from './styles/';

function randLoremIpsum () {
  function randIndex (arr) {
    return Math.floor(Math.random() * arr.length);
  }
  function randLoremIpsumIndex () {
    return randIndex(LOREM_IPSUM);
  }

  return LOREM_IPSUM[randLoremIpsumIndex()];
}

const LoremIpsum = ({numLines = 8}) => {
  const children = Array(...Array(numLines)).map((junk) => {
    const line = randLoremIpsum();
    return (
      <p>{line}</p>
    );
  });

  return (
    <div className={styles}>
      {children}
    </div>
  );
};

export default LoremIpsum;
