import {RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, RECEIVE_OWNED_PLAYLISTS, RECEIVE_FOLLOWED_PLAYLISTS, RECEIVE_PLAYLIST_ERRORS, CLEAR_PLAYLIST_ERRORS} from '../actions/playlist_actions'

import merge from 'lodash/merge';

const _nullPlaylistInfo = ({
  playlists: {},
  errors: []
});

const PlaylistsReducer = (state = _nullPlaylistInfo, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){

    case RECEIVE_PLAYLISTS:
      newState.playlists = action.playlists;
      return newState;

    case RECEIVE_PLAYLIST:
      newState.playlists = action.playlist;
      return newState;

    case RECEIVE_OWNED_PLAYLISTS:
      newState.playlists = action.playlists;
      return newState;

    case RECEIVE_FOLLOWED_PLAYLISTS:
      newState.playlists = action.playlists;
      return newState;

    case RECEIVE_PLAYLIST_ERRORS:
      newState.errors = action.errors;
      return newState;

    case CLEAR_PLAYLIST_ERRORS:
      newState.errors = [];
      return newState;

    default:
      return state;
  }
}

export default PlaylistsReducer;
