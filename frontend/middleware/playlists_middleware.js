import {
  receivePlaylists,
  receivePlaylist,
  receiveFollowedPlaylists,
  receiveOwnedPlaylists,
  receivePlaylistErrors,
  receiveAddSongSuccess,
  FETCH_PLAYLISTS,
  FETCH_PLAYLIST,
  FETCH_FOLLOWED_PLAYLISTS,
  FETCH_OWNED_PLAYLISTS,
  CREATE_PLAYLIST,
  ADD_SONG_TO_PLAYLIST
} from '../actions/playlist_actions';

import { requestPlaylists, requestPlaylist, requestOwnedPlaylists, requestFollowedPlaylists, createPlaylist, requestAddSongToPlaylist } from '../util/playlists_api_util';

const PlaylistsMiddleware = ({getState, dispatch}) => (next) => (action) => {

  const receivePlaylistsSuccessCb = (playlists) => dispatch(receivePlaylists(playlists));
  const receivePlaylistSuccessCb = (playlist) => dispatch(receivePlaylist(playlist));
  const receiveFollowedPlaylistsSuccessCb = (playlists) => dispatch(receiveFollowedPlaylists(playlists));
  const receiveOwnedPlaylistsSuccessCb = (playlists) => dispatch(receiveOwnedPlaylists(playlists));
  const errorsCb = (errors) => dispatch(receivePlaylistErrors(errors.responseJSON));
  const receiveAddSongSuccessCb = (success) => (dispatch(receiveAddSongSuccess(success)))

  switch (action.type){

    case FETCH_PLAYLISTS:
      requestPlaylists(receivePlaylistsSuccessCb, errorsCb);
      return next(action);

    case FETCH_PLAYLIST:
      requestPlaylist(action.id, receivePlaylistSuccessCb, errorsCb);
      return next(action);

    case FETCH_FOLLOWED_PLAYLISTS:
      requestFollowedPlaylists(action.user_id, receiveFollowedPlaylistsSuccessCb, errorsCb);
      return next(action);

    case FETCH_OWNED_PLAYLISTS:
      requestOwnedPlaylists(action.owner_id, receiveOwnedPlaylistsSuccessCb, errorsCb);
      return next(action);

    case CREATE_PLAYLIST:
      createPlaylist(action.playlist, receivePlaylistSuccessCb, errorsCb);
      return next(action);

    case ADD_SONG_TO_PLAYLIST:
      requestAddSongToPlaylist(action.params, receiveAddSongSuccessCb, errorsCb)
      return next(action);

    default:
      return next(action);
  }

};

export default PlaylistsMiddleware;
