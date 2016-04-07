class MapsController < ApplicationController
  def index

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

  # def sidebar
    
  # end

  def all_donations
  
    @donations = Donation.all
    @n_of_donations = {}
    @donation_total = {}


    @donations.each do |donation|
      d_amount = donation.amount
      dis_id = donation.disaster_id
      category = Disaster.find(dis_id).category.capitalize
      if @n_of_donations[category]
        @n_of_donations[category] += 1
      else
        @n_of_donations[category] = 1
      end
      if @donation_total[category]
        @donation_total[category] += d_amount
      else
        @donation_total[category] = d_amount
      end
    end

    donation_frequency_array = []
    @n_of_donations.each do |donation|
          donation_frequency_array << {"category": donation[0], "frequency": donation[1]}
    end

    


    total_amount = 0
    donation_amount_array = []
    @donation_total.each do |donation|
          donation_amount_array << {"category": donation[0], "value": donation[1]/100}
          total_amount += donation[1]/100
    end

    p donation_amount_array.sort! { |x, y| x["value"]<=> y["value"] }# sort is not working 


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

  # render :all_donations

end
