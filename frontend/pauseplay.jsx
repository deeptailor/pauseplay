import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

import { signup, login, logout } from './actions/session_actions'
import { fetchPlaylists, fetchPlaylist, fetchFollowedPlaylists, fetchOwnedPlaylists, createPlaylist } from './actions/playlist_actions'




document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  };


  window.fetchPlaylists = fetchPlaylists;
  window.fetchPlaylist = fetchPlaylist;
  window.fetchFollowedPlaylists = fetchFollowedPlaylists;
  window.fetchOwnedPlaylists = fetchOwnedPlaylists;
  window.createPlaylist = createPlaylist;

  window.store = store;



  ReactDOM.render(<Root store={store}/>, root)
});
