class DashboardController < ApplicationController
  include SessionsHelper

  layout 'application'

  def index
    @user=current_user
  end

end
