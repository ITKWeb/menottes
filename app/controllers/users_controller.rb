class UsersController < ApplicationController

	skip_before_filter :verify_authenticity_token

	def index
		@users = User.all
		render json: @users
	end

  def login
		u = User.where("login = ? AND password = ? ", params[:login], params[:password])
		render json: u
  end

end
