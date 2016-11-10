class Api::PlaylistFollowsController < ApplicationController
  def create
    if (params[:playlist_follows])
      @playlist_follow = PlaylistFollow.new(playlist_follows_params)
      if @playlist_follow.save
        render json: ["Successfully Followed Playlist"], status: 200
      else
        render json: ["You already follow this playlist"], status: 422
      end
    else
      render json: ["Error Following playlist"], status: 422
    end
  end

  def destroy

  end


  private

  def playlist_follows_params
    params.require(:playlist_follows).permit(:playlist_id, :user_id)
  end
end
