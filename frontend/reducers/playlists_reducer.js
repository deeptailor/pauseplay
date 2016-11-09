import {RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, RECEIVE_OWNED_PLAYLISTS, RECEIVE_FOLLOWED_PLAYLISTS} from '../actions/playlist_actions'
import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/session_actions'
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

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;

    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;

    default:
      return state;
  }
}

export default PlaylistsReducer;
