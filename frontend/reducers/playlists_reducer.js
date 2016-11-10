import {RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, RECEIVE_OWNED_PLAYLISTS, RECEIVE_FOLLOWED_PLAYLISTS,
  RECEIVE_PLAYLIST_ERRORS, CLEAR_PLAYLIST_ERRORS, RECEIVE_ADD_SONG_SUCCESS, CLEAR_PLAYLIST_SUCCESS,
  RECEIVE_PLAYLIST_FOLLOW_SUCCESS, RECEIVE_PLAYLIST_FOLLOW_ERROR, CLEAR_PLAYLIST_FOLLOW_ERROR_AND_SUCCESS} from '../actions/playlist_actions'

import merge from 'lodash/merge';

const _nullPlaylistInfo = ({
  playlists: {},
  errors: [],
  success: [],
  followedPlaylists: {
    playlists: {},
    error: [],
    success: []
  }
});

const PlaylistsReducer = (state = _nullPlaylistInfo, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){

    case RECEIVE_PLAYLISTS:
      newState.playlists = action.playlists;
      newState.errors = [];
      return newState;

    case RECEIVE_PLAYLIST:
      newState.playlists = action.playlist;
      return newState;

    case RECEIVE_OWNED_PLAYLISTS:
      newState.playlists = action.playlists;
      return newState;

    case RECEIVE_FOLLOWED_PLAYLISTS:
      newState.followedPlaylists.playlists = action.playlists;
      return newState;

    case RECEIVE_PLAYLIST_ERRORS:
      newState.errors = action.errors;
      return newState;

    case CLEAR_PLAYLIST_ERRORS:
      newState.errors = [];
      return newState;

    case CLEAR_PLAYLIST_SUCCESS:
      newState.success = [];
      newState.errors = [];
      return newState;

    case RECEIVE_ADD_SONG_SUCCESS:
      newState.success = action.success;
      return newState;

    case RECEIVE_PLAYLIST_FOLLOW_SUCCESS:
      newState.followedPlaylists.error = [];
      newState.followedPlaylists.success = action.success;
      return newState;

    case RECEIVE_PLAYLIST_FOLLOW_ERROR:
      newState.followedPlaylists.success = [];
      newState.followedPlaylists.error = action.error;
      return newState;

    case CLEAR_PLAYLIST_FOLLOW_ERROR_AND_SUCCESS:
      newState.followedPlaylists.success = [];
      newState.followedPlaylists.error = [];
      return newState;

    default:
      return state;
  }
}

export default PlaylistsReducer;
