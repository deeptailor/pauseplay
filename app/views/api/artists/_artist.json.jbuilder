json.extract! artist, :name, :profile_image_url, :id

json.albums do
  json.partial! 'api/albums/album', collection: artist.albums, as: :album
end
