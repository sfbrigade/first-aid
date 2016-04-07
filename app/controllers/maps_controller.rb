class MapsController < ApplicationController
  def index
    user = current_user
    positive_latitude_calc = user.latitude + rounded_latitude
    negative_latitude_calc = user.latitude - rounded_latitude
    positive_longitude_calc = user.longitude + latitude_longitude_distance
    negative_longitude_calc = user.longitude - latitude_longitude_distance
    in_area_charities = Charity.all

    @response = []
      in_area_charities.each do |charity|
        if (charity.latitude > negative_latitude_calc) && (charity.latitude < positive_latitude_calc) && (charity.longitude < negative_longitude_calc) && (charity.longitude > positive_longitude_calc)
          @response << charity
        end
      end

    if params[:address]
      address = params[:address].split(" ").join("+")
    end
    uri = URI("https://maps.googleapis.com/maps/api/geocode/json?address=756+Mill+St,Half+Moon+Bay,CA&key=#{ENV['PLACE']}")
    @location = Net::HTTP.get_response(uri).body

    respond_to do |format|
      format.html
      format.json {render json: @location}
    end
    p '$' * 100
    @current = current_user.to_json
    p '$' * 100

  end

  def sidebar

  end

  private
    def latitude_longitude_distance
      user = current_user
      (rounded_latitude/Math::cos(user.latitude))
    end

    def rounded_latitude
      radius = 1000
      earth = 6371.0
      (radius/earth)
    end
end
