class DashboardController < ApplicationController
  
  layout 'application'

  def index
    if signed_in?
      @user=current_user
    else
      
    end
    @zide=Zide.find_by_user_id(current_user[:id])
  end

end
