json.extract! @album, :name, :album_art_url, :id

json.artist do
  json.name @artist.name
  json.profile_image_url @artist.profile_image_url
  json.id @artist.id
end

json.songs @songs do |song|
  # json.partial! 'api/songs/song', collection: @songs, as: :song
  json.id song.id
  json.title song.title
  json.audio_url song.audio_url
  json.album_id song.album_id
  json.artist @artist.name
end
