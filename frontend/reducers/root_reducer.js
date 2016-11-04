import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SongReducer from './songs_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  songInfo: SongReducer
});

export default RootReducer;
