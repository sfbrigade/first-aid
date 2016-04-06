require 'test_helper'

class DisasterTest < ActiveSupport::TestCase
    # it 'create creates a new disaster' do
    # before_count = Disaster.count
    # Disaster.create(latitude: 44, longitude: 123, category: "earthquake")
    # expect(Disaster.count).to_not eq(before_count)
    test "should save a disaster" do
      disaster = Disaster.new
      assert disaster.save
    end
end
