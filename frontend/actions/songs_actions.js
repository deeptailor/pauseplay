export const FETCH_ALL_ARTISTS = "FETCH_ALL_ARTISTS";
export const FETCH_ARTIST = "FETCH_ARTIST";
export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const FETCH_ALBUM = "FETCH_ALBUM";
export const FETCH_SONGS = "FETCH_SONGS";

export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_SONGS = "RECEIVE_SONGS";


export const fetchAllArtists = () => ({
  type: FETCH_ALL_ARTISTS
});

export const fetchArtist = (id) => ({
  type: FETCH_ARTIST,
  id: id
});

export const fetchAlbums = (filter) => ({
  type: FETCH_ALBUMS,
  filter: filter
});

export const fetchAlbum = (id) => ({
  type: FETCH_ALBUM,
  id: id
});

export const fetchSongs = (filter) => ({
  type: FETCH_SONGS,
  filter: filter
});

//receive actions

export const receiveAllArtists = (artists) => ({
  type: RECEIVE_ALL_ARTISTS,
  artists: artists
});

export const receiveArtist = (artist) => ({
  type: RECEIVE_ARTIST,
  artist: artist
});

export const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums: albums
});

export const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album: album
});

export const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs: songs
});
