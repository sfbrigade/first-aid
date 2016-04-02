class DisastersController < ApplicationController

  def map

  end

  def index
    #home page, feed of all disasters in narrowed map scope
    @disasters = Disaster.all
  end

  def show
    #a specific disaster with associated charities
    @disaster = Disaster.find(params[:id])
    #list nearby charities
    # @charities = Charities.find_by()
  end


end
