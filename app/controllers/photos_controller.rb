class PhotosController < ApplicationController
  respond_to :json

  def current_user
    nil
  end

  # GET /photos.json
  def index
    @photos = Photo.all

    respond_with @photos
  end

  # GET /photos/1.json
  def show
    @photo = Photo.find(params[:id])
    respond_with @photo
  end

  # POST /photos.json
  def create
    @photo = Photo.create(params[:photo])
    @photo.save

    respond_with @photo
  end

  # PUT /photos/1.json
  def update
    @photo = Photo.find(params[:id])
    @photo.update_attributes(params[:photo])

    respond_with @photo
  end

  # DELETE /photos/1.json
  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy

    respond_with @photo
  end
end
