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

  # POST from charity donation form
  def stripe_charge
    Stripe.api_key = "sk_test_8zheMKz7JDMHp5rgwd5yR1ly"
    # Get the credit card details submitted by the form
    token = params[:stripeToken]
    # Create a Customer
    customer = Stripe::Customer.create(
      :source => token,
      :description => "Example customer"
    )
    # Charge the Customer instead of the card
    begin
      charge = Stripe::Charge.create(
        :amount => 1000, # in cents
        :currency => "usd",
        :customer => customer.id
      )
      flash[:notice] = "Thanks for donating!"
    rescue Stripe::CardError => e
      flash[:danger] = e.message
    end
    redirect_to "/disasters/#{params[:disaster_id]}/charities/#{params[:id]}"
  end


end
