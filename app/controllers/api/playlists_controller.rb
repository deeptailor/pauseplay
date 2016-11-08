class Api::PlaylistsController < ApplicationController

  def index
    if(params[:playlist])
      if(params[:playlist][:owner_id])
        @playlists = Playlist.where({owner_id: playlist_params[:owner_id]})
      elsif (params[:playlist][:user_id])
        user = User.find_by(id:playlist_params[:user_id])
        @playlists = []
        user.playlist_follows.each do |playlist_follow|
          @playlists << playlist_follow.playlist
        end
        return @playlists
      end
    else
      @playlists = Playlist.all
    end
    @playlists.includes(:songs)
  end

  def show
    @playlist = Playlist.find_by(id: params[:id])
    @songs = @playlist.songs
    @owner = @playlist.owner
  end

  def destroy

  end

  private

  def playlist_params
    params.require(:playlist).permit(:name, :owner_id, :user_id)
  end
end
