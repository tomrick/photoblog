class PhotoSerializer < ApplicationSerializer
  attributes :id, :title, :url

  has_many :comments
end
