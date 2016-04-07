class DisasterWorker
  include Sidekiq::Worker

  def perform

    response = []

    uri = URI("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson")
    @location = Net::HTTP.get_response(uri).body

    json = JSON.parse(@location)
    json['features'].each do |locations|
      lon = locations['geometry']['coordinates'][0]
      lat = locations['geometry']['coordinates'][1]
      p lon
      p lat
      p '-' * 25
      disaster = Disaster.find_by("latitude = ? AND longitude = ?", lat, lon) || Disaster.new(latitude: lat, longitude: lon, category: 'earthquake')
      p disaster
      if disaster.id == nil && disaster.latitude >= 25 && disaster.longitude <= -65 && disaster.latitude <= 50 && disaster.longitude >= -125 || disaster.longitude <= -140 && disaster.longitude >= -165 && disaster.latitude >= 56 && disaster.latitude <= 72 || disaster.longitude <= -154 && disaster.longitude >= -161 && disaster.latitude >= 18.8 && disaster.latitude <= 22.5

        disaster.save
        test = Disaster.last
        @users = User.all
        response << {lon: disaster.longitude, lat: disaster.latitude, disasters_id: disaster.id, category: disaster.category, date: disaster.created_at}
        # @users.each do |user|
          # AlertWorker.perform_async(user.id, disaster.id)
          # TwilioWorker.perform_async(user.id, disaster.id)
        # end
      end

<<<<<<< HEAD
  #     if response.length > 0
  #       WebsocketRails[:disasters].trigger(:new_disaster, response.to_json)
  #       response = []
  #     end
=======
      if response.length > 0
        WebsocketRails[:disasters].trigger(:new_disaster, response.to_json)
        response = []
      end
>>>>>>> master
    end
  end
end
