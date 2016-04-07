class UsersController < ApplicationController



  before_filter :authenticate_user!

  def currentsession
    if request.xhr?

        response = current_user.id
        respond_to do |format|
          format.json{
            render json: response
          }
      end
    else
      render :index
    end

  end


  def show

    @user = User.find(params[:id])
    @user_donations = @user.donations

    @n_of_donations = {"Earthquake"=>0, "Hurricane"=>0, "Tornado"=>0, "Flood"=>0, "Wild fire"=>0}
    @donation_total = {}
    # @user_charities = @user.charities

    @user_donations.each do |donation|
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
    p "donations mine **************"
    p donation_frequency_array


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



end
