class CharitiesController < ApplicationController

  def show
    #a specific charity's page w/info
    p params[:charity_id]
    @charity = Charity.find(params[:id])

  end

  def index
    @disaster = Disaster.find(params[:disaster_id])
    positive_latitude_calc = @disaster.latitude + rounded_latitude
    negative_latitude_calc = @disaster.latitude - rounded_latitude
    positive_longitude_calc = @disaster.longitude + 0.3
    negative_longitude_calc = @disaster.longitude - 0.3
    @charities = @disaster.charities  #Charities that have donated to this disaster
    in_area_charities = Charity.all
    response = []
    if request.xhr?
        respond_to do |format|
          in_area_charities.each do |charity|
            if (charity.latitude > negative_latitude_calc) && (charity.latitude < positive_latitude_calc) && (charity.longitude > negative_longitude_calc) && (charity.longitude < positive_longitude_calc)
              p "this is inside stuff"
              response << charity
            end
          end
            format.json{
                render json: response
              }
          end

    else
      render :index
    end

  end

  # POST from charity donation form
  def stripe_charge
    donation = Donation.create(user_id: current_user.id, disaster_id: params[:disaster_id], charity_id: params[:id], amount: params[:donation_amount])

      Stripe.api_key = "sk_test_8zheMKz7JDMHp5rgwd5yR1ly"
      token = params[:stripeToken]

        customer = Stripe::Customer.create(
          :source => token,
          :description => "Example customer"
        )
      # current_user.token = customer //save user token
      begin
        charge = Stripe::Charge.create(
          :amount => donation.amount, # in cents
          :currency => "usd",
          :customer => customer.id
        )
        flash[:good] = "Thanks for donating!"
      rescue Stripe::CardError => e
        flash[:problem] = e.message
      end
      p "hereeeeee"
      redirect_to "/disasters/#{params[:disaster_id]}/charities/#{params[:id]}"

  end

  private

    def rounded_latitude
      radius = 1000
      earth = 6371.0
      (radius/earth)
    end

end
