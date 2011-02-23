class DashboardController < ApplicationController
  include ApplicationHelper

  layout 'application'

  def index
    if signed_in?
      @user=current_user
    end
  end

end
