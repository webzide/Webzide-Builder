class Zide < ActiveRecord::Base
  attr_accessible :code
  belongs_to :user
end