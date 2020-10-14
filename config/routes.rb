Rails.application.routes.draw do
  resources :bookings, defaults: { format: 'json' }
  resources :departments, defaults: { format: 'json' }
  resources :users, defaults: { format: 'json' }
  
  get "/sessions/:id" => "sessions#destroy", defaults: { format: 'json' }
  post "/sessions" => "sessions#create", defaults: { format: 'json' }

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
