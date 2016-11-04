import { receiveAllArtists,
         receiveArtist,
         receiveAlbums,
         receiveAlbum,
         receiveSongs,
         FETCH_ALL_ARTISTS,
         FETCH_ARTIST,
         FETCH_ALBUMS,
         FETCH_ALBUM,
         FETCH_SONGS
} from '../actions/songs_actions';

import { fetchArtists, fetchArtist, fetchAlbums, fetchAlbum, fetchSongs } from '../util/songs_api_util'

const SongsMiddleware = ({getState, dispatch}) => (next) => (action) => {

  const receiveAllArtistsSuccessCb = (artists) => dispatch(receiveAllArtists(artists));
  const receiveArtistSuccessCb = (artist) => dispatch(receiveArtist(artist));
  const receiveAlbumsSuccessCb = (albums) => dispatch(receiveAlbums(albums));
  const receiveAlbumSuccessCb = (album) => dispatch(receiveAlbum(album));
  const receiveSongsSuccessCb = (songs) => dispatch(receiveSongs(songs));
  const errorscb = (errors) => console.log(errors);

  switch (action.type){

    case FETCH_ALL_ARTISTS:
      fetchArtists(receiveAllArtistsSuccessCb, errorscb);
      return next(action);

    case FETCH_ARTIST:
      fetchArtist(action.id, receiveArtistSuccessCb, errorscb);
      return next(action);

    case FETCH_ALBUMS:
      fetchAlbums(receiveAlbumsSuccessCb, errorscb, action.filter);
      return next(action);

    case FETCH_ALBUM:
      fetchAlbum(action.id, receiveAlbumSuccessCb, errorscb);
      return next(action);

    case FETCH_SONGS:
      fetchSongs(receiveSongsSuccessCb, errorscb, action.filter);
      return  next(action);

    default:
      return next(action);


  }
};

export default SongsMiddleware;
