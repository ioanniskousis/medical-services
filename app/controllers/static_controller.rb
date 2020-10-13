class StaticController < ApplicationController
  def index
    # @debug = 'request.path : ' + request.path
    render :index
  end
end
