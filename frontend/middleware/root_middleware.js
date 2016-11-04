import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SongsMiddleware from './songs_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SongsMiddleware
);

export default RootMiddleware;
