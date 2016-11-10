class Api::PlaylistsController < ApplicationController

  def create

    if playlist_params[:playlist_image_url] == ''
      playlist_image_url = "https://res.cloudinary.com/deeptailor/image/upload/o_69/v1478317876/favicon_fpu1ou.png"
    else
      playlist_image_url = playlist_params[:playlist_image_url]
    end

    @playlist = Playlist.new({
      owner_id: playlist_params[:owner_id],
      title: playlist_params[:title],
      description: playlist_params[:description],
      public: playlist_params[:public],
      playlist_image_url: playlist_image_url
      });
    if @playlist.save;
      @owner = @playlist.owner
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

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
    params.require(:playlist).permit(:name, :owner_id, :user_id, :title, :description, :public, :playlist_image_url)
  end
end
