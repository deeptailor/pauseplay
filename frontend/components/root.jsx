import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';

import App from './app'
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import SplashContainer from './splash/splash_container';
import UserAccountContainer from './user_account/user_account_container';
import AlbumsContainer from './albums/albums_container';
import PlaylistsContainer from './playlists/playlists_container';
import PlaylistShowContainer from './playlists/playlist_show_container';
import PlaylistCreateContainer from './playlists/playlist_create_container';
import MyPlaylistsContainer from './playlists/my_playlists_container';
import FollowedPlaylistsContainer from './playlists/followed_playlists_container';
import UserViewContainer from './user_view/user_view_container';


const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/');
  }
}

const _redirectIfNotLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (!currentUser) {
    replace('/login')
  }
}

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SplashContainer}/>
        <Route path="login" component={LoginFormContainer} onEnter={_redirectIfLoggedIn}></Route>
        <Route path="signup" component={SignupFormContainer} onEnter={_redirectIfLoggedIn}></Route>
        <Route path="playlists" component={PlaylistsContainer} onEnter={_redirectIfNotLoggedIn}></Route>
        <Route path="playlists/create" component={PlaylistCreateContainer} onEnter={_redirectIfNotLoggedIn}></Route>
        <Route path="albums/:album_id" component={AlbumsContainer}></Route>
        <Route path="playlists/:playlist_id" component={PlaylistShowContainer} onEnter={_redirectIfNotLoggedIn}></Route>
        <Route path="myplaylists" component={MyPlaylistsContainer} onEnter={_redirectIfNotLoggedIn}></Route>
        <Route path="followedplaylists" component={FollowedPlaylistsContainer} onEnter={_redirectIfNotLoggedIn}></Route>
        <Route path="/users/:user_id" component={UserViewContainer} onEnter={_redirectIfNotLoggedIn}></Route>
      </Route>
      <Route path="/users/:user_id" component={UserAccountContainer}></Route>
    </Router>
  </Provider>
);

export default Root;
