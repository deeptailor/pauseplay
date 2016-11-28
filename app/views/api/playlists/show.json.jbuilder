json.extract! @playlist, :id, :title, :description, :owner_id, :public, :playlist_image_url

json.owner do
  json.username @owner.username
end

json.songs @songs do |song|
  # json.partial! 'api/songs/song', collection: @songs, as: :song
  json.id song.id
  json.title song.title
  json.audio_url song.audio_url
  json.album_id song.album_id
  json.artist song.album.artist.name
end
