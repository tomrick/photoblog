class Comment < ActiveRecord::Base
  attr_accessible :text, :photo_id

  belongs_to :photo
end
