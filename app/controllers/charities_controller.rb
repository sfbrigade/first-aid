class CharitiesController < ApplicationController

  def show
    #a specific charity's page w/info
    p params[:charity_id]
    @charity = Charity.find(params[:id])
  end

  def index
    @disaster = Disaster.find(params[:disaster_id])
    @charities = @disaster.charities
  end

end
