require 'rails_helper'

RSpec.describe Donation, type: :model do

  context "without user id" do
    it "does not save donation" do
      donation = Donation.create(amount: 100, charity_id: 2, disaster_id: 3)
      expect(Donation.last).to_not eq(donation)
    end
  end

  context "without charity id" do
    it "does not save donation" do
      donation = Donation.create(amount: 100, user_id: 1, disaster_id: 3)
      expect(Donation.last).to_not eq(donation)
    end
  end

  context "without disaster id" do
    it "does not save donation" do
      donation = Donation.create(amount: 100, charity_id: 2, user_id: 1)
      expect(Donation.last).to_not eq(donation)
    end
  end

  context "without amount" do
    it "does not save donation" do
      donation = Donation.create(charity_id: 2, disaster_id: 3, user_id: 1)
      expect(Donation.last).to_not eq(donation)
    end
  end

  context "correct inputs" do
    it "saves donation" do
      donation = Donation.create(amount: 100, charity_id: 2, disaster_id: 3, user_id: 1)
      expect(Donation.last).to eq(donation)
    end
  end
end