class Api::AlbumsController < ApplicationController


    def index
      if (album_params[:artist_id])
        @albums = @albums.where(artist_id:albums_params[:artist_id])
      elsif (album_params[:name])
        @albums = @albums.where(name: album_params[:name])
      else
        @albums = Album.all
      end
      @albums.includes(:songs)
    end

    def show
      @album = Album.find_by(params[:id])
      @album.includes(:songs)
    end


    private

    def album_params
      params.require(:artist).permit(:name, :artist_id)
    end

    def find_album
      @album = Album.find_by(params[:id])
    end
end
