class DisasterWorker
  include Sidekiq::Worker

  def perform

    lat = []
    long = []
    uri = URI("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson")
    @location = Net::HTTP.get_response(uri).body

    json = JSON.parse(@location)
    json['features'].each do |locations|
      p '-' * 25
      disaster = Disaster.find_by("latitude = ? AND longitude = ?", locations['geometry']['coordinates'][1], locations['geometry']['coordinates'][0]) || Disaster.new(latitude: locations['geometry']['coordinates'][1], longitude: locations['geometry']['coordinates'][0], category: 'earthquake')
      p disaster
      if disaster.id == nil
        disaster.save
        @users = User.all
        @users.each do |user|
          AlertWorker.perform_async(user.id, disaster.id)
          TwilioWorker.perform_async(@user.id, disaster.id)
        end
      end        
    end
  end
end
