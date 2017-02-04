import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import Home from 'container/Home';
import SimpleListComponent from 'container/SimpleListComponent';
import PrivatePage from 'container/PrivatePage';
import LoginPage from 'container/LoginPage';
import privateRoute from 'router/privateRoute';

export default (onLogout) => (
  <Route path="/" name="home" component={Home}>
    <IndexRoute component={SimpleListComponent}/>
    <Route path="private" component={privateRoute(PrivatePage)}/>
    <Route path="login" component={LoginPage}/>
    <Route path="logout" onEnter={onLogout}/>
  </Route>
);
