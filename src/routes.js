import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Reservation from './pages/Reservation';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/reservation" exact component={Reservation} />
    </Switch>
  );
}
