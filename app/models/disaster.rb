class Disaster < ActiveRecord::Base
  has_many :donations
  has_many :users, through: :donations
  has_many :charities, through: :donations

#   before_create :new_disaster

#   private

#     def new_disaster
#       lat = []
#       long = []
#       uri = URI("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson")
#       @location = Net::HTTP.get_response(uri).body

#       json = JSON.parse(@location)
#       json['features'].each do |locations|
#          self.longitude = locations['geometry']['coordinates'][0]
#          self.latitude = locations['geometry']['coordinates'][1]
#       end

#     end

end
