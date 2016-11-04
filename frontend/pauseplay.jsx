import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

import { signup, login, logout } from './actions/session_actions'
import { fetchAllArtists, fetchArtist, fetchAlbums, fetchSongs } from './actions/songs_actions'




document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  };


  window.fetchAllArtists = fetchAllArtists;
  window.fetchArtist = fetchArtist;
  window.fetchAlbums = fetchAlbums;
  window.fetchSongs = fetchSongs;

  window.store = store;



  ReactDOM.render(<Root store={store}/>, root)
});
