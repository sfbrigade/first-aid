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

    donation = Donation.create(user_id: current_user.id, disaster_id: params[:disaster_id], charity_id: params[:id], amount: params[:donation_amount])

    Stripe.api_key = "sk_test_8zheMKz7JDMHp5rgwd5yR1ly"
    p params
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
    redirect_to "/disasters/#{params[:disaster_id]}/charities/#{params[:id]}"
  end


end
