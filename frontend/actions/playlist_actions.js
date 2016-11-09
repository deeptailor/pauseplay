export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';
export const FETCH_PLAYLIST = 'FETCH_PLAYLIST';
export const FETCH_FOLLOWED_PLAYLISTS = 'FETCH_FOLLOWED_PLAYLISTS';
export const FETCH_OWNED_PLAYLISTS = 'FETCH_OWNED_PLAYLISTS';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_FOLLOWED_PLAYLISTS = 'RECEIVE_FOLLOWED_PLAYLISTS';
export const RECEIVE_OWNED_PLAYLISTS = 'RECEIVE_OWNED_PLAYLISTS';

export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';


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
