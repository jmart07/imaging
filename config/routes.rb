Rails.application.routes.draw do
  resources :students, only: [:index, :show]
  resources :templates do
    resources :shapes, only: [:create, :update, :destroy]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  !request.xhr? && request.format.html?
end