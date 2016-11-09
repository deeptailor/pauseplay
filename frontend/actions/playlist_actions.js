export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';
export const FETCH_PLAYLIST = 'FETCH_PLAYLIST';
export const FETCH_FOLLOWED_PLAYLISTS = 'FETCH_FOLLOWED_PLAYLISTS';
export const FETCH_OWNED_PLAYLISTS = 'FETCH_OWNED_PLAYLISTS';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_FOLLOWED_PLAYLISTS = 'RECEIVE_FOLLOWED_PLAYLISTS';
export const RECEIVE_OWNED_PLAYLISTS = 'RECEIVE_OWNED_PLAYLISTS';
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';
export const CLEAR_PLAYLIST_ERRORS = 'CLEAR_PLAYLIST_ERRORS';
export const CLEAR_PLAYLIST_SUCCESS = 'CLEAR_PLAYLIST_SUCCESS';

export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';
export const ADD_SONG_TO_PLAYLIST = 'ADD_SONG_TO_PLAYLIST';
export const RECEIVE_ADD_SONG_SUCCESS = 'RECEIVE_ADD_SONG_SUCCESS';


export const fetchPlaylists = () => ({
  type: FETCH_PLAYLISTS
});

export const fetchPlaylist = (id) => ({
  type: FETCH_PLAYLIST,
  id: id
});

export const fetchFollowedPlaylists = (user_id) => ({
  type: FETCH_FOLLOWED_PLAYLISTS,
  user_id: user_id
});

export const fetchOwnedPlaylists = (owner_id) => ({
  type: FETCH_OWNED_PLAYLISTS,
  owner_id: owner_id
});


export const receivePlaylists = (playlists) => ({
  type: RECEIVE_PLAYLISTS,
  playlists: playlists
});

export const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist: playlist
});

export const receiveFollowedPlaylists = (playlists) => ({
  type: RECEIVE_FOLLOWED_PLAYLISTS,
  playlists: playlists
});

export const receiveOwnedPlaylists = (playlists) => ({
  type: RECEIVE_OWNED_PLAYLISTS,
  playlists: playlists
});

export const createPlaylist = (playlist) => ({
  type: CREATE_PLAYLIST,
  playlist: playlist
})

export const receivePlaylistErrors = (errors) => ({
  type: RECEIVE_PLAYLIST_ERRORS,
  errors: errors
});

export const clearPlaylistErrors = () => ({
  type: CLEAR_PLAYLIST_ERRORS
})

export const addSongToPlaylist = (params) => ({
  type: ADD_SONG_TO_PLAYLIST,
  params: params
})

export const receiveAddSongSuccess = (success) => ({
  type: RECEIVE_ADD_SONG_SUCCESS,
  success: success
})

export const clearPlaylistSuccess = () => ({
  type: CLEAR_PLAYLIST_SUCCESS
})
