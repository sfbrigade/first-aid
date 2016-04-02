class UsersController < ApplicationController

  def login
    @user = User.new
    #log in form
  end

  def signup
    @user = User.new
    #sign up form
  end

  def create
    #new user
  end

  def session
    #after login, create session
  end

  def show
    @user = User.find(params[:id])
    @user_charities = @user.charities


    @n_of_donations = {}
    @donation_total = {}
    @user_charities.each do |charity|
      d_amount = charity.donations.find_by(user_id: @user.id).amount
      dis_id = charity.donations.find_by(user_id: @user.id).disaster_id
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
