class PollsController < ApplicationController
  def index
    @poll = Poll.all
    render json: @poll
  end

  def show_all
    complete_poll = Poll.find(params[:idPoll])
    render :json => complete_poll.to_json(:include => [:participants => {:include => [:choices]}])
  end
end
