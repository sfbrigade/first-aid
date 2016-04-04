class UsersController < ApplicationController


  before_filter :authenticate_user!
  # def login
  #   log in form
  #   @user = User.find_by_email(params[:email])
  #   if @user.password == params[:password]
  #     give_token
  #   else
  #     redirect_to home_url
  #   end
  # end


  # # def signup
  # #   @user = User.new
  # #   #sign up form
  # # end

  # # def create
  # #   #new user
  # #   @user = User.new(params[:user])
  # #   @user.password = params[:password]
  # #   @user.save!
  # # end

  def show

    @user = User.find(params[:id])
    @user_donations = @user.donations

    @n_of_donations = {}
    @donation_total = {}
    # @user_charities = @user.charities

    # @n_of_donations = {}
    # @donation_total = {}
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
    # @user_charities.each do |charity|
    #   d_amount = charity.donations.find_by(user_id: @user.id).amount
    #   dis_id = charity.donations.find_by(user_id: @user.id).disaster_id
    #   category = Disaster.find(dis_id).category.capitalize
    #   if @n_of_donations[category]
    #     @n_of_donations[category] += 1
    #   else
    #     @n_of_donations[category] = 1
    #   end
    #   if @donation_total[category]
    #     @donation_total[category] += d_amount
    #   else
    #     @donation_total[category] = d_amount
    #   end
    # end

    @hero = nil
    highest = 0
    @donation_total.each do |key, value|
      if value > highest
        highest = value
        @hero = key
      end
    end

  end

end
