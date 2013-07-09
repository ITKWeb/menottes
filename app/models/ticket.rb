# == Schema Information
#
# Table name: tickets
#
#  id          :integer          not null, primary key
#  titre       :string(255)
#  description :string(255)
#  importance  :integer
#  poids       :integer
#  tempsPris   :datetime
#  created_at  :datetime
#  updated_at  :datetime
#

class Ticket < ActiveRecord::Base
	belongs_to :projet
end
