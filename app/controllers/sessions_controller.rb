class SessionsController < ApplicationController

  def new
  end

  def create
    user= User.authenticate(params[:session][:name], params[:session][:password])

    if user.nil?
      render 'new'
    else
      sign_in user
      redirect_to user
    end
  end

  def destroy
    sign_out
    redirect_to root_path
  end

end
