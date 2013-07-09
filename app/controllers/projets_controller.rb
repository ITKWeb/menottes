class ProjetsController < ApplicationController

	#La ligne en dessous nous permet d'avoir un trou de sécurité (cf CRSF, man in the middle)
	skip_before_filter :verify_authenticity_token
	
	def index
		@projets = Projet.all
		render json: @projets
	end

	def create
		projet = request.raw_post
		p = JSON.parse(projet, :object_class => Projet)
		p.save
		render json: p
	end

	def destroy
		projet = Projet.find(params[:idProjet])
		projet.destroy
		render json: true
	end
end
