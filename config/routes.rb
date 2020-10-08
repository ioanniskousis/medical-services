Rails.application.routes.draw do
  resources :users
  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end
  
  resources :sessions, only: [:new, :create, :destroy]
  # resources :hello, only: [:index]

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
