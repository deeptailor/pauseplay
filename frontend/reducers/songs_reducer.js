import {RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST, RECEIVE_ALBUMS, RECEIVE_ALBUM, RECEIVE_SONGS, PLAY_SONG} from '../actions/songs_actions'
import merge from 'lodash/merge';

const _nullSongInfo = ({
  artists: {},
  albums: {},
  songs: {},
  currentSong: {},
  playing: false
});


const albumsArrayToObject = (array) => {
  if (!array){
    return {};
  }
  let object = {};
  array.forEach(album => object[album.id] = album);
  return object;
};


const SongReducer = (state = _nullSongInfo, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){

    case RECEIVE_ALL_ARTISTS:
      newState.artists = action.artists;
      newState.albums = {};
      newState.songs = {};
      return newState;

    case RECEIVE_ARTIST:
      newState.artists = {[action.artist.id]: action.artist};
      newState.albums = albumsArrayToObject(action.artist.albums);
      return newState;

    case RECEIVE_ALBUMS:
      newState.albums = (action.albums ? action.albums : {});
      newState.songs = {};
      newState.artists = {};
      return newState;

    case RECEIVE_ALBUM:
      newState.albums = {[action.album.id]:action.album}
      newState.songs = albumsArrayToObject(action.album.songs);
      newState.artists = {};
      return newState;

    case RECEIVE_SONGS:
      newState.songs = (action.songs ? action.songs : {});
      newState.artists = {};
      newState.albums = {};
      return newState;

    case PLAY_SONG:
      newState.currentSong = action.song;
      newState.playing = true;
      return newState;

    default:
      return state;
  }
};

export default SongReducer;
