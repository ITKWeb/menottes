class ProjetsController < ApplicationController
	def index
		@projets = Projet.all
		render json: @projets
	end
end
