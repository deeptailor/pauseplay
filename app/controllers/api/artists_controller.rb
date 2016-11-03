class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    @artists.includes(:albums)
  end

  def show
    @artist = Artist.find_by(params[:id])
    @artist.includes(:albums)
  end


  private

  def artist_params
    params.require(:artist).permit(:name)
  end

  def find_artist
    @artist = Artist.find_by(id:params[:id])
  end
end
