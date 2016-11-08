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
  console.log('im in ajax land')
  $.ajax({
    method: 'get',
    url: 'api/playlists',
    data: {playlist:{owner_id: owner_id}},
    success: success,
    error: error
  })
};
