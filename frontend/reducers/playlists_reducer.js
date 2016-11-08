import {RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, RECEIVE_OWNED_PLAYLISTS, RECEIVE_FOLLOWED_PLAYLISTS} from '../actions/playlist_actions'
import merge from 'lodash/merge';

const _nullPlaylistInfo = ({
  playlists: {}
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

    default:
      return state;
  }
}

export default PlaylistsReducer;
