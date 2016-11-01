import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');

  let store = configureStore();
  window.store = store;

  window.signup = signup;
  window.login = login;
  window.logout = logout;

  ReactDOM.render(<h1>PAIISEPL>Y</h1>, root)
});
