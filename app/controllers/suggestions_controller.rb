class SuggestionsController < ApplicationController
  def create
    @suggestion = current_user.suggestions.build(params[:suggestion])

    if @suggestion.save
      redirect_to root_path
    end
  end

end