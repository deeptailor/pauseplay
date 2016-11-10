class Api::PlaylistSongsController < ApplicationController

  def create
    if (params[:playlist_songs])
      @playlist_song = PlaylistSong.new(playlist_songs_params)
      if @playlist_song.save
        render json: ["Successfully added"], status: 200
      else
        render json: ["Song already in your playlist"], status: 422
      end
    else
      render json: ["Error Adding Song"], status: 422
    end
  end

  def destroy

  end

  private

  def playlist_songs_params
    params.require(:playlist_songs).permit(:playlist_id, :song_id)
  end

end
