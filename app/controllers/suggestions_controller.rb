class SuggestionsController < ApplicationController
  def create
    @suggestion = current_user.suggestions.build(params[:suggestion])

    if @suggestion.save
      redirect_to suggest_path
    end
  end

  def index
    
    @suggestions = Suggestion.all
  end

end