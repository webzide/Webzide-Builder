class ZidesController < ApplicationController

  def show
    @user = current_user
    @zide = Zide.find_by_user_id(current_user[:id])
    render :layout => "zides"
  end

  def edit
    @user = current_user
    @zide = Zide.find_by_user_id(current_user[:id])
  end

  def update
    @zide = Zide.find_by_user_id(current_user[:id])
    if @zide.update_attributes(params[:zide])
      redirect_to @zide;
    end
  end
end