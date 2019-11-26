import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import SignUp from '../pages/signun';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    {/* <Route path="/playlists/:id" component={SignUp} /> */}
  </Switch>
);

export default Routes;
