/* eslint-disable no-unused-vars*/
import { h, render } from 'preact';
/* eslint-enable no-unused-vars*/

/* __START HERE__. This is your entry point!
 * We create a function to render the App in `preact`, and also use that
 * function as a callback for hot reloading.
 */

// Keep your APP_PATH in sync with the require statement inside `init`
const APP_PATH = './containers/App/';
// This is the App container
const root = document.getElementById('root');
let rendered;
function init () {
  const App = require('./containers/App/').default;
  // The third argument to render:
  // "is the root node to *replace*, otherwise it appends."
  rendered = render(<App />, root, rendered);
}
init();

// Pass in the path to your app component and an init function to
// register hot reloading
if (process.env.NODE_ENV !== 'production') {
  (require('./config/registerHot').default)(APP_PATH, init);
}

console.log('App is running');
