class Api::SongsController < ApplicationController


    def index
      if(params[:song])
        if (params[:song][:title])
          @songs = Song.where(title:song_params[:title])
        elsif (params[:song][:album_id])
          @songs = Song.where(album_id:song_params[:album_id])
        end
      else
        @songs = Song.all
      end
    end

    private

    def song_params
      params.require(:song).permit(:title, :album_id)
    end

end
