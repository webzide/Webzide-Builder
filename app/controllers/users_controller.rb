class UsersController < ApplicationController
  def new
    @user=User.new
  end

  def show
    @user= User.find(params[:id])
  end

  def create
    @user=User.new(params[:user])

    if @user.save
      @zide=Zide.new
      @zide[:user_id] = @user.id
      @zide.save

      sign_in @user
      redirect_to @user
    else
      @title="Signup"
      render 'new'
    end
  end

  def profile
    
  end

  def edit
    @user=User.find(params[:id])
  end

end
