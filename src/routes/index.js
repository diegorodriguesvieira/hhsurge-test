import { Switch } from 'react-router-dom';
import React from 'react';

import Home from '../containers/home';
import Login from '../containers/login';
import NoMatch from '../containers/404';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Routes = () => (
  <div>
    <Switch>
      <PrivateRoute exact path="/">
        <Home />
      </PrivateRoute>
      <PublicRoute exact path="/login">
        <Login />
      </PublicRoute>
      <PublicRoute path="*">
        <NoMatch />
      </PublicRoute>
    </Switch>
  </div>
);

export default Routes;
