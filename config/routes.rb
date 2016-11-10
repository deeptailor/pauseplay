Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :songs, only: [:index]
    resources :playlists, only: [:index, :show, :destroy, :create]
    resources :playlist_songs, only: [:create, :destroy]
    resources :playlist_follows, only: [:create, :destroy]
  end

  root "static_pages#root"
end
