/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LandlordPage from 'containers/LandlordPage/Loadable';
import NavBar from 'containers/NavBar/Loadable';
import GlobalStyle from '../../global-styles';
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/landlords/:id" component={LandlordPage} />
        <Route
          exact
          path="/login"
          render={props => <LoginPage {...props} item="login" />}
        />
        <Route
          exact
          path="/register"
          render={props => <LoginPage {...props} item="register" />}
        />

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle random={getRandomInt(6)} />
    </div>
  );
}
