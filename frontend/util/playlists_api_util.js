export const requestPlaylists = (success, error, data = {}) => {
  $.ajax({
    method: 'get',
    url: 'api/playlists',
    data: data,
    success: success,
    error: error
  });
};

export const requestPlaylist = (id, success, error) => {
  $.ajax({
    method: 'get',
    url: `api/playlists/${id}`,
    success: success,
    error: error
  });
};

export const requestFollowedPlaylists = (user_id, success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/playlists',
    data: {playlist:{user_id: user_id}},
    success: success,
    error: error
  })
};

export const requestOwnedPlaylists = (owner_id, success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/playlists',
    data: {playlist:{owner_id: owner_id}},
    success: success,
    error: error
  })
};

export const createPlaylist = (data, success, error) => {
  $.ajax({
    method: 'post',
    url: '/api/playlists',
    data: {playlist:data},
    success: success,
    error: error
  })
};

export const requestAddSongToPlaylist = (data, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/playlist_songs',
    data: {playlist_songs: data},
    success: success,
    error: error
  });
}
