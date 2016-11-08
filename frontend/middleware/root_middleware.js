import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SongsMiddleware from './songs_middleware';
import PlaylistsMiddleware from './playlists_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SongsMiddleware,
  PlaylistsMiddleware
);

export default RootMiddleware;
