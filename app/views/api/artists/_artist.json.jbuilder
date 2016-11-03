json.extract! album, :name, :profile_image_url

json.albums do
  json.partial! 'api/albums/album', collection: artist.albums, as: :album
end
