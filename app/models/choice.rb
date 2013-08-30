class Choice < ActiveRecord::Base
  belongs_to :poll
  belongs_to :participant
end
