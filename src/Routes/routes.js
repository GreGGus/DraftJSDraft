import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import App from '../App.js';
import MainLayout from '../containers/MainLayout.js'
//   <Route path='playerOne' header="PlayerOne" component={PromptContainer} />

export default (
  <Router history={hashHistory}>
    <Route path='/'  component={MainLayout} >
      <IndexRoute component={App} />

    </Route>
  </Router>
);
