Rails.application.routes.draw do
  resources :students, only: [:index, :show]
  resources :templates do
    resources :shapes, only: [:create, :update, :destroy]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
