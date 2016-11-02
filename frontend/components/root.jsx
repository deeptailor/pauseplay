import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';

import App from './app'
import LoginFormContainer from './session_forms/login_form_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/login" component={LoginFormContainer}></Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
