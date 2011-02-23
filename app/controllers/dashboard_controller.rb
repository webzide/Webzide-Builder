class DashboardController < ApplicationController
  include ApplicationHelper

  layout 'application'

  def index
    @user=current_user
  end

end
