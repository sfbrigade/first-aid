class MapsController < ApplicationController
  def index
    if params[:address]
      address = params[:address].split(" ").join("+")
    end
    uri = URI("https://maps.googleapis.com/maps/api/geocode/json?address=#{address}&key=#{ENV['PLACE']}")
    @location = Net::HTTP.get_response(uri).body

    respond_to do |format|
      format.html
      format.json {render json: @location}
    end

  end
end
