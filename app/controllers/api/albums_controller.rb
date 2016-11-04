class Api::AlbumsController < ApplicationController


    def index
      if (params[:album][:artist_id])
        @albums = Album.where(artist_id:album_params[:artist_id])
      elsif (params[:album][:name])
        @albums = Album.where(name: album_params[:name])
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
      params.require(:album).permit(:name, :artist_id)
    end

    def find_album
      @album = Album.find_by(params[:id])
    end
end
