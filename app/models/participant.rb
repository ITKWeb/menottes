class Participant < ActiveRecord::Base
  has_many :choices
  has_and_belongs_to_many :polls
  belongs_to :user
end
