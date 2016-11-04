export const fetchArtists = (success, error, data = {}) => {
    $.ajax({
    method: 'get',
    url: 'api/artists',
    data: data,
    success:success,
    error:error
  });
};
export const fetchArtist = (id, success, error) => {
  $.ajax({
    method: 'get',
    url: `api/artists/${id}`,
    success:success,
    error:error
  });
};


export const fetchAlbums = (success, error, data = {}) => {
  $.ajax({
    method: 'get',
    url: 'api/albums',
    data: {album:data},
    success:success,
    error:error
  });
};
export const fetchAlbum = (id, success, error) => {
  $.ajax({
    method: 'get',
    url: `api/albums/${id}`,
    success:success,
    error:error
  });
};

export const fetchSongs = (success, error, data = {}) => {
  $.ajax({
    method: 'get',
    url: 'api/songs',
    data: {song:data},
    success:success,
    error:error
  });
};
