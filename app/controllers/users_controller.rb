class UsersController < ApplicationController

	skip_before_filter :verify_authenticity_token

	def index
		@users = User.all
		render json: @users
	end

  def login
		#input = request.raw_post
#		u = JSON.parse(input, :object_class => User)
#		u.find_by_login(u.login)
	
#  	params = {:login => u.login, :password => u.password}
#	  output = User.find(:all, :conditions => ["login = :login AND password = :password", params])

		# this works:
#	 u = User.find_by_login(params[:login])

		u = User.where("login = ? AND password = ? ", params[:login], params[:password])
		render json: u
  end

end
