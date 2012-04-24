class TagsController < ApplicationController
  respond_to :json
  def current_user
    nil
  end

  def index
    @tags = Tag.all

    respond_with @tags
  end
end
