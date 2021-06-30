import { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const PropertyListings = lazy(() => import('./PropertyListings'));

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PropertyListings} />
      </Switch>
    </Router>
  );
}
