import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';

import App from './app'
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import Splash from './splash/splash';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Splash}/>
        <Route path="/login" component={LoginFormContainer}></Route>
        <Route path="/signup" component={SignupFormContainer}></Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
