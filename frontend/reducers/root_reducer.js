import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SongReducer from './songs_reducer';
import PlaylistsReducer from './playlists_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  songInfo: SongReducer,
  playlists: PlaylistsReducer
});

export default RootReducer;
