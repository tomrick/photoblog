class Photo < ActiveRecord::Base
  attr_accessible :title, :url

  has_many :comments
end
