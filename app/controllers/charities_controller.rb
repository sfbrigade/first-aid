class CharitiesController < ApplicationController

  def show
    #a specific charity's page w/info
    p params[:charity_id]
    @charity = Charity.find(params[:id])

  end

  def index
    @charities = []
    @disaster = Disaster.find(params[:disaster_id])
    in_area_charities = Charity.all
    positive_latitude_calc = @disaster.latitude + rounded_latitude
    negative_latitude_calc = @disaster.latitude - rounded_latitude
    positive_longitude_calc = @disaster.longitude + 0.3
    negative_longitude_calc = @disaster.longitude - 0.3
    p "positive_latitude_calc"
      p positive_latitude_calc
      p "negative_latitude_calc"
      p negative_latitude_calc
      p "positive_longitude_calc"
      p positive_longitude_calc
      p "negative_longitude_calc"
      p negative_longitude_calc
    in_area_charities.each do |charity|
      p "#{charity.title} lat"
          p charity.latitude
          p "#{charity.title} lon"
          p charity.longitude
      if (charity.latitude > negative_latitude_calc) && (charity.latitude < positive_latitude_calc) && (charity.longitude > negative_longitude_calc) && (charity.longitude < positive_longitude_calc)
         @charities << charity
      end
    end
    if request.xhr?
      render :index, layout: false
    else
      render :index
    end
  end

  # POST from charity donation form
  def stripe_charge
    donation = Donation.create(user_id: current_user.id, disaster_id: params[:disaster_id], charity_id: params[:id], amount: params[:donation_amount])

      Stripe.api_key = ENV['STRIPE_SECRET']
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
