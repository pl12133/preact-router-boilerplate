/* eslint-disable no-unused-vars */
import { h } from 'preact';
/* eslint-enable no-unused-vars */

// `preact-router` has an API like `react-router`, with <Router> and <Route>
import { Router, Route } from 'preact-router';
import { Home, About, Page404 } from 'containers/';

const Routes = () => (
  <Router>
    <Route component={Home} path={'/'} />
    <Route component={About} path={'/about'} />
    <Route component={Page404} type={'404'} default />
  </Router>
);

/* `preact-router` can also render routes without using the <Route> component.
 * As long as you give your containers a `path` prop, <Router> will take care of
 * the rest:
 *
 * <Router>
 *   <Home path={'/'} />
 *   <About path={'/about'} />
 *   <Page404 type={'404'} default />
 * </Router>
 */

export default Routes;
