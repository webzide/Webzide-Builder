class DashboardController < ApplicationController
  include ApplicationHelper

  layout 'application'

  def index
    if signed_in?
      @user=current_user
    else
      redirect_to login_path
    end
    @zide=Zide.find_by_user_id(current_user[:id])
  end

  def demo
    render :layout=> 'builder'
  end

  def show
    @user=current_user
    @zide=Zide.find_by_user_id(current_user[:id])

    @settings = @zide[:page_settings]

    render :layout=> 'builder'
  end

  def editor
    if signed_in?
      @user=current_user
      @zide=Zide.find_by_user_id(current_user[:id])
      @settings=@zide[:page_settings]
      render :layout => 'builder'
    else
      redirect_to root_path
    end

    if request.post? and params[:zide]
      if Zide.find_by_user_id(current_user[:id])
        @zide=Zide.find_by_user_id(current_user[:id])
        @zide.update_attributes(params[:zide])

        respond_to do |format|
          
          format.js
        end
      end
    end
  end
end
