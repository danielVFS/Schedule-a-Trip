import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Reserve from './pages/Reserve';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/reservation" component={Reserve} />
    </Switch>
  );
}
