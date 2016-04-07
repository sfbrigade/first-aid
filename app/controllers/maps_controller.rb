class MapsController < ApplicationController
  def index
    # if current_user
    #   user = current_user
    #   positive_latitude_calc = user.latitude + rounded_latitude
    #   negative_latitude_calc = user.latitude - rounded_latitude
    #   positive_longitude_calc = user.longitude + latitude_longitude_distance
    #   negative_longitude_calc = user.longitude - latitude_longitude_distance
    #   in_area_charities = Charity.all
    #   p "in in maps contoller"
    #   @response = []
    #     in_area_charities.each do |charity|
    #       if (charity.latitude > negative_latitude_calc) && (charity.latitude < positive_latitude_calc) && (charity.longitude < negative_longitude_calc) && (charity.longitude > positive_longitude_calc)
    #         @response << charity
    #       end
    #     end
    # end
    if params[:address]
      address = params[:address].split(" ").join("+")
    end
    uri = URI("https://maps.googleapis.com/maps/api/geocode/json?address=756+Mill+St,Half+Moon+Bay,CA&key=#{ENV['PLACE']}")
    @location = Net::HTTP.get_response(uri).body

    respond_to do |format|
      format.html
      format.json {render json: @location}
    end
    @current = current_user.to_json

  end

  # def sidebar
    
  # end

  def all_donations
  
    @donations = Donation.all
    @n_of_donations = {}
    @donation_total = {"Earthquake"=>0, "Hurricane"=>0, "Tornado"=>0, "Flood"=>0, "Wild fire"=>0}

    @donations.each do |donation|
      d_amount = donation.amount
      dis_id = donation.disaster_id
      category = Disaster.find(dis_id).category.capitalize
      if @n_of_donations[category]
        @n_of_donations[category] += 1
      else
        @n_of_donations[category] = 1
      end
      @donation_total[category] += d_amount
    end

    donation_frequency_array = []
    @n_of_donations.each do |donation|
          donation_frequency_array << {"category": donation[0], "frequency": donation[1]}
    end
    p "donations all **************"
    p donation_frequency_array

    total_amount = 0
    donation_amount_array = []
    @donation_total.each do |donation|
      donation_amount_array << {"category": donation[0], "value": donation[1]/100}
      total_amount += donation[1]/100
    end

    donation_amount_array.sort! { |a, b| a[:value] <=> b[:value] }# sort is not working 
    donation_amount_array.reverse!


    hero = nil
    highest = 0
    @donation_total.each do |key, value|
      if value > highest
        highest = value
        hero = key
      end
    end

    response = []
    if request.xhr?
        response << {amount: donation_amount_array, frequency: donation_frequency_array, hero: hero, total_amount: total_amount}
        respond_to do |format|
          format.json{
            render json: response
          }
      end
    end
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
