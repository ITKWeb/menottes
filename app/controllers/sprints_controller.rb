class SprintsController < ApplicationController
	def index
		@sprints = Sprint.all
		render json: @sprints
	end

	def get_sprints_by_projet
		sprint_by_id = Sprint.where(projet_id: params[:idProjet])
		render json: sprint_by_id
	end

	def get_tickets_by_projet_by_sprint
		tickets = Ticket.where(projet_id: params[:idProjet]).where(sprint_id: params[:idSprint])
		render json: tickets
	end
end

