class Api::AlbumsController < ApplicationController


    def index
      if(params[:album])
        if (params[:album][:artist_id])
          @albums = Album.where(artist_id:album_params[:artist_id])
        elsif (params[:album][:name])
          @albums = Album.where(name: album_params[:name])
        end
      else
        @albums = Album.all
      end
      @albums.includes(:songs)
    end

    def show
      @album = Album.find_by(id:params[:id])
      @songs = @album.songs
      @artist = @album.artist
    end


    private

    def album_params
      params.require(:album).permit(:name, :artist_id)
    end

    def find_album
      @album = Album.find_by(params[:id])
    end
end
