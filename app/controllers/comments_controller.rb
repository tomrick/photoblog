class CommentsController < ApplicationController
  respond_to :json

  def current_user
    nil
  end

  def index
    ids = params[:ids]

    @comments = Comment.where id: ids
    respond_with @comments
  end

  def create
    @comment = Comment.new(params[:comment])
    @comment.save

    respond_with @comment
  end
end
