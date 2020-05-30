import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Todo from '../pages/Todo';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Todo} />
  </Switch>
);

export default Routes;
