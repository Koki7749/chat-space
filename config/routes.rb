Rails.application.routes.draw do
  devise_for :users
  root 'posts#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :posts, only: [:index, :create]
end

end