class UsersController < ApplicationController
  before_filter :authenticate, :only => [:edit, :update, :show]
  before_filter :correct_user, :only => [:edit, :update]

  def new
    @user=User.new
  end

  def show
    @user= current_user
    @profile = Profile.find_by_user_id(current_user[:id])
  end

  def create
    @user=User.new(params[:user])


    if @user.save
      @profile= Profile.new(params[:profile])
      @profile[:user_id] = @user.id
      @profile.save

      @zide=Zide.new
      @zide[:user_id] = @user.id
      @zide.save

      
      sign_in @user
      flash[:success] = "Welcome to Webzide"
      redirect_to @user
    else
      @title="Signup"
      render 'new'
    end
  end

  def profile
    @user = current_user
    redirect_to @user
  end


  def edit
    @user=User.find(params[:id])
    @profile = Profile.find_by_user_id(current_user[:id])
    @title = "Edit User Profile"
  end

  def update
    @user = User.find(params[:id])
    @profile = Profile.find_by_user_id(current_user[:id])
    
    if @user.update_attributes(params[:user])
      
      @profile.update_attributes(params[:profile])
      redirect_to @user
    else
      render "edit"
    end
  end



  private
    def authenticate
      deny_access unless signed_in?
    end

    def correct_user
      @user = User.find(params[:id])
      redirect_to(root_path) unless current_user?(@user)
    end
end
