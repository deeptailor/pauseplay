json.extract! playlist, :id, :title, :description, :owner_id, :public

json.songs do
  json.partial! 'api/songs/song', collection: playlist.songs, as: :song
end
