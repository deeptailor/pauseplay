json.extract! album, :name, :album_art_url, :artist_id, :id

json.songs do
  json.partial! 'api/songs/song', collection: album.songs, as: :song
end
