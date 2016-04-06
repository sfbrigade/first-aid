require 'rails_helper'

RSpec.describe Charity, type: :model do

  context "without title" do
    it "does not save charity" do
      charity = Charity.create(street_address: "69 Kozena Way", city: "San Francisco", state: "CA", zip_code: 90210)
      expect(Charity.last).to_not eq(charity)
    end
  end

  context "without street address" do
    it "does not save charity" do
      charity = Charity.create(title: "Jeremy's Bank", city: "San Francisco", state: "CA", zip_code: 90210)
      expect(Charity.last).to_not eq(charity)
    end
  end

  context "without city" do
    it "does not save charity" do
      charity = Charity.create(title: "Jeremy's Bank", street_address: "69 Kozena Way", state: "CA", zip_code: 90210)
      expect(Charity.last).to_not eq(charity)
    end
  end

  context "without state" do
    it "does not save charity" do
      charity = Charity.create(title: "Jeremy's Bank", city: "San Francisco", street_address: "69 Kozena Way", zip_code: 90210)
      expect(Charity.last).to_not eq(charity)
    end
  end

  context "without zip code" do
    it "does not save charity" do
      charity = Charity.create(title: "Jeremy's Bank", city: "San Francisco", street_address: "69 Kozena Way", state: "CA")
      expect(Charity.last).to_not eq(charity)
    end
  end

  context "with proper inputs" do
    it "saves charity" do
      charity = Charity.create(title: "Jeremy's Bank", city: "San Francisco", street_address: "69 Kozena Way", state: "CA", zip_code: 90210)
      expect(Charity.last).to eq(charity)
    end
  end
end

