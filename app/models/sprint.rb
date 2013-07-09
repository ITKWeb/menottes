class Sprint < ActiveRecord::Base
	belongs_to :projet
	has_many :tickets
end
