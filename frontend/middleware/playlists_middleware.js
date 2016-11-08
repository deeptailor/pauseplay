import {
  receivePlaylists,
  receivePlaylist,
  receiveFollowedPlaylists,
  receiveOwnedPlaylists,
  FETCH_PLAYLISTS,
  FETCH_PLAYLIST,
  FETCH_FOLLOWED_PLAYLISTS,
  FETCH_OWNED_PLAYLISTS
} from '../actions/playlist_actions';

import { requestPlaylists, requestPlaylist, requestOwnedPlaylists, requestFollowedPlaylists } from '../util/playlists_api_util';

const PlaylistsMiddleware = ({getState, dispatch}) => (next) => (action) => {
  const receivePlaylistsSuccessCb = (playlists) => dispatch(receivePlaylists(playlists));
  const receivePlaylistSuccessCb = (playlist) => dispatch(receivePlaylist(playlist));
  const receiveFollowedPlaylistsSuccessCb = (playlists) => dispatch(receiveFollowedPlaylists(playlists));
  const receiveOwnedPlaylistsSuccessCb = (playlists) => dispatch(receiveOwnedPlaylists(playlists));
  const errorscb = (errors) => console.log(errors);

  switch (action.type){

    case FETCH_PLAYLISTS:
      requestPlaylists(receivePlaylistsSuccessCb, errorscb);
      return next(action);

    case FETCH_PLAYLIST:
      requestPlaylist(action.id, receivePlaylistSuccessCb, errorscb);
      return next(action);

    case FETCH_FOLLOWED_PLAYLISTS:
      requestFollowedPlaylists(action.user_id, receiveFollowedPlaylistsSuccessCb, errorscb);
      return next(action);

    case FETCH_OWNED_PLAYLISTS:
      requestOwnedPlaylists(action.owner_id, receiveOwnedPlaylistsSuccessCb, errorscb);
      return next(action);

    default:
      return next(action);
  }

};

export default PlaylistsMiddleware;
