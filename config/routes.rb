Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :teams, :posts
    end
  end

  get '*path', to: 'home#redirect_to_root'
end
