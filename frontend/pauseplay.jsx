import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions'
import { fetchPlaylists, fetchPlaylist, fetchFollowedPlaylists, fetchOwnedPlaylists, createPlaylist, addSongToPlaylist, followPlaylistRequest, receivePlaylistFollowSuccess } from './actions/playlist_actions';



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
  window.addSongToPlaylist = addSongToPlaylist;
  window.followPlaylistRequest = followPlaylistRequest;
  window.receivePlaylistFollowSuccess = receivePlaylistFollowSuccess;

  window.store = store;



  ReactDOM.render(<Root store={store}/>, root);


  document.addEventListener('scroll', () => {
    let scrollPos = $(window).scrollTop() + window.innerHeight;
    if($('.splash-footer-container').offset()){
      if (scrollPos >= $('.splash-footer-container').offset().top){
        let audioHeight = $('.audio-bar-container').height();
        $('.audio-bar-container').css({position:'absolute'});
      }else{
        $('.audio-bar-container').css({position:'fixed'});
      }
    }else{
      $('.audio-bar-container').css({position:'fixed'});
    }
  })

});
