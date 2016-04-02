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
    # Your Donations page, D3 data
  end

end
