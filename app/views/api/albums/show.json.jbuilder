json.extract! @album, :name, :album_art_url, :id

json.artist do
  json.name @artist.name
  json.profile_image_url @artist.profile_image_url
  json.id @artist.id
end

json.songs do
  json.partial! 'api/songs/song', collection: @songs, as: :song
end
