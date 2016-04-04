class DisastersController < ApplicationController

  def map

  end

  def index
    #home page, feed of all disasters in narrowed map scope
    @disasters = Disaster.all
    response = []
    if request.xhr?
      @disasters.each do |disaster|
        response << {lon: disaster.longitude, lat: disaster.latitude, disasters_id: disaster.id, category: disaster.category, date: disaster.created_at}
        end
        respond_to do |format|
          format.json{
            render json: response
          }
      end
    end
  end

  def show
    #a specific disaster with associated charities

    @disaster = Disaster.find(params[:id])
    if request.xhr?
    #list nearby charities
    # @charities = Charities.find_by()
    respond_to do |format|
          format.json{
            render json: @disaster
          }
      end

    end
  end


end
