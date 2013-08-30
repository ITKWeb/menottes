class Poll < ActiveRecord::Base
  has_many :choices
  has_and_belongs_to_many :participants
end
