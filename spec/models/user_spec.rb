require 'rails_helper'

RSpec.describe User, type: :model do

  context "without email" do
    it "does not save user" do
      user = User.create(name: "Brigitte", password: "password")
      expect(User.last).to_not eq(user)
    end
  end

  context "without @ symbol" do
    it "does not save user" do
      user = User.create(name: "Jeremy", password: "password", email: "jeremyjeremyisthebest.com")
      expect(User.last).to_not eq(user)
    end
  end

  context "without .com symbol" do
    it "does not save user" do
      user = User.create(name: "Jeremy", password: "password", email: "jeremy@jeremyisthebestcom")
      expect(User.last).to_not eq(user)
    end
  end

  context "without password" do
    it "does not save user" do
      user = User.create(name: "Jeremy", email: "jeremy@jeremyisthebest.com")
      expect(User.last).to_not eq(user)
    end
  end

  context "with correct inputs" do
    it "saves user" do
      user = User.create(name: "Jeremy", email: "jeremy@jeremyisthebest.com", password: "password")
      expect(User.last).to eq(user)
    end
  end
  
end