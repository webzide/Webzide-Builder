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
  end

  def show
    @user=current_user
    @zide=Zide.find_by_user_id(current_user[:id])

    @settings = @zide[:page_settings]

    render :layout=> 'dashboard'
  end

  def settings
    if session[:user_id]
      @zide=Zide.find_by_user_id(session[:user_id])
      render :layout => 'dashboard'
    else
      redirect_to home_path

    end

    if request.post?

      @css='#page{'

      @css += 'position: absolute;'
      @css += 'left: 0px;'
      @css+= 'top: 0px;'

      if params[:width]
        @css = @css + 'width:'
        @css += params[:width]
        @css += ';'
      end
      if params[:height]
        @css += 'height:'
        @css += params[:height]
        @css += ';'
      end

      if params[:background_color]
        @css += 'background:'
        @css += params[:background_color]
        @css += ';'
      end

      @css += '}'

      @zide[:page_settings]=@css;
      @zide.save;
    end
  end

  def editor
    if signed_in?
      @user=current_user
      @zide=Zide.find_by_user_id(current_user[:id])
      @settings=@zide[:page_settings]
      render :layout => 'dashboard'
    else
      redirect_to root_path
    end

    if request.post? and params[:zide]
      if Zide.find_by_user_id(current_user[:id])
        @zide=Zide.find_by_user_id(current_user[:id])
        @zide[:code] = params[:zide][:code]
        @zide.save
      else
        @zide=Zide.new(params[:zide])
        @zide[:user_id]= current_user[:id]
        @zide.save
      end
    end
  end
end
