class DisasterWorker
  include Sidekiq::Worker

  def perform

    lat = []
    long = []
    uri = URI("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson")
    @location = Net::HTTP.get_response(uri).body

    json = JSON.parse(@location)
    json['features'].each do |locations|
      lon = locations['geometry']['coordinates'][0]
      lat = locations['geometry']['coordinates'][1]
      p '-' * 25
      disaster = Disaster.find_by("latitude = ? AND longitude = ?", lat, lon) || Disaster.new(latitude: lat, longitude: lon, category: 'earthquake') if lat >= 25 && lon <= -65 && lat <= 50 && lon >= -125 || lon <= -140 && lon >= -165 && lat >= 56 && lat <= 72 || lon <= -154 && lon >= -161 && lat >= 18.8 && lat <= 22.5
      p disaster
      if disaster.id == nil
        disaster.save
        @users = User.all
        @users.each do |user|
          AlertWorker.perform_async(user.id, disaster.id)
          # TwilioWorker.perform_async(user.id, disaster.id)
        end
      end        
    end
  end
end
