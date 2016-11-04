json.extract! @artist, :name, :profile_image_url, :id

json.albums do
  json.partial! 'api/albums/album', collection: @albums, as: :album
end
