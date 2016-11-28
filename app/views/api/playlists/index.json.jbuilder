@playlists.each do |playlist|
  json.set! playlist.id do
    json.partial! 'playlist', playlist: playlist
    json.owner playlist.owner.username
  end
end
