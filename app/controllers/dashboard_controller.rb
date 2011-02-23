class DashboardController < ApplicationController
  include ApplicationHelper

  layout 'application'

  def index
    if signed_in?
      @user=current_user
    end

    @zide=Zide.find_by_user_id(current_user[:user_id])
  end

end
