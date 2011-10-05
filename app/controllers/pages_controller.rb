class PagesController < ActionController::Base

  include SessionsHelper

  def index
    
    @suggestion = Suggestion.new if signed_in?

    render :layout => "application"
	end

	def about
	end

	def media
	end

	def contact
	end

  def suggest
    

    @suggestion = Suggestion.new if signed_in?

    if signed_in?
      @user = User.find(current_user[:id])
      @suggestions = @user.suggestions.paginate(:page => params[:page])

    end

    @suggestions = Suggestion.all

    render :layout => "application"

    
  end


end

