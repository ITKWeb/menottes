class TicketsController < ApplicationController
	def index
		@tickets = Ticket.all
		render json: @tickets
	end

	def get_tickets_by_projet
		ticket_by_id = Ticket.where(projet_id: params[:idProjet])
		render json: ticket_by_id
	end
end

