class DashboardController < ApplicationController
  include ApplicationHelper


  def index
    if signed_in?
      @user=current_user
    else
      redirect_to login_path
    end
    @zide=Zide.find_by_user_id(current_user[:id])
  end

end
