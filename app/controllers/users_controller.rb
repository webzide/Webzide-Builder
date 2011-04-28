class UsersController < ApplicationController
  before_filter :authenticate, :only => [:edit, :update, :show]
  before_filter :correct_user, :only => [:edit, :update]

  def index
    @users = User.all
  end

  def new
    @user=User.new
    @tos = "
1. LIMITATION OF USAGE

There will be absolutely no Adult content on the webpage.
Nothing defamatory that violates any human right laws or the laws within the local jurisdiction.
Any violation will result in an immediate termination of service to that user.

2. COPYRIGHTED CONTENT

The user must also agree to not posting any content will violates any trademarks or copyright laws.
Any violation will result in an immediate termination of service to that user.

3. TERMINATION OF SERVICE

The services provided by Webzide may be terminated at anytime by both parties: the provider and the end user.
The service provider will have the sole discretion to delete any part of the content in the page or user account.

4. DATA LOSS

Webzide or any of its developers, will not be held responsible for any data loss as a result of termination of services.


5. SERVICES INTERUPTION

Due to the fact that webzide is currently under constant change and development.
There may be service downtimes due to software upgrades and network maintenance.
If this happens, we like to ask our users to remain patient"


  end



  def show
    @user= User.find_by_id(params[:id])
    @profile = Profile.find_by_user_id(@user.id)
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
