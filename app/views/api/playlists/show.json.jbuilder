json.extract! @playlist, :id, :title, :description, :owner_id, :public

json.owner do
  json.username @owner.username
end

json.songs do
  json.partial! 'api/songs/song', collection: @songs, as: :song
end
