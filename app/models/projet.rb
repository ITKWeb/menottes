# == Schema Information
#
# Table name: projets
#
#  id         :integer          not null, primary key
#  nom        :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Projet < ActiveRecord::Base
	has_many :tickets
end
