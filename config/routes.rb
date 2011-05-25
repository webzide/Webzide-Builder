Webzide11::Application.routes.draw do
  

  get "users/profile"

  resources :users
  resources :sessions, :only => [:create, :destroy]
  resources :zides
  resources :suggestions
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => "welcome#index"

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
  root :to => "pages#index"
  
  match '/media', :to => "pages#media"
  
  match '/contact', :to => "pages#contact"
  
  match '/register', :to=> "users#new"

  match '/login', :to=>"sessions#new"
  match '/logout', :to=>"sessions#destroy"
  match '/dashboard', :to=> "dashboard#index"
  match '/show', :to=> "dashboard#show"
  match '/editor', :to=> "dashboard#editor"
  match '/demo', :to=> "dashboard#demo"
  match '/profile', :to=> "users#profile"
  match '/suggest', :to=> "pages#suggest"

  match '/about', :to => "about#index"
  match '/about/inspiration', :to=>"about#inspiration"
  match '/about/features', :to=>"about#features"
  match '/about/contact', :to=>"about#contact"
  match 'about/videos', :to => "about#videos"
  match 'about/advantages', :to=> "about#advantages"
  match 'about/founders', :to=> "about#founders"
  match 'about/benefits', :to=> "about#benefits"



  match '/help', :to => "help#index"

  match '/policy', :to => "legal#policy"
  match '/privacy', :to => "legal#privacy"
  match '/tos', :to => "legal#tos"


end
