class PollsController < ApplicationController
  def index
    @poll = Poll.all
    render json: @poll
  end
end
