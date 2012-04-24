class TagsController < ApplicationController
  def current_user
    nil
  end

  def index
    @tags = Tag.all
    render json: @tags
  end
end
