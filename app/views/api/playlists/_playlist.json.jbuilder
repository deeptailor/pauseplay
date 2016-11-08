json.extract! playlist, :id, :title, :description, :owner_id, :public, :playlist_image_url

json.songs do
  json.partial! 'api/songs/song', collection: playlist.songs, as: :song
end
