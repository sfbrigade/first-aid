require 'rails_helper'

RSpec.describe Disaster, type: :model do

  context "without category" do
    it "does not save disaster" do
      disaster = Disaster.create(latitude: 120, longitude: 33)
      expect(Disaster.last).to_not eq(disaster)
    end
  end

  context "without longitude" do
    it "does not save disaster" do
      disaster = Disaster.create(category: "tornado", latitude: 120)
      expect(Disaster.last).to_not eq(disaster)
    end
  end

  context "without latitude" do
    it "does not save disaster" do
      disaster = Disaster.create(category: "tornado", longitude: 33)
      expect(Disaster.last).to_not eq(disaster)
    end
  end

  context "with proper inputs" do
    it "saves disaster" do
      disaster = Disaster.create(category: "tornado", latitude: 120, longitude: 33)
      expect(Disaster.last).to eq(disaster)
    end
  end
end