class Charity < ActiveRecord::Base
  has_many :donations
  has_many :users, through: :donations
  has_many :disasters, through: :donations

  # before_create :lng_lat

  private

  def lng_lat
    address = self.street_address.gsub(/\s/, '+')
    city = self.city.gsub(/\s/, '+')
    state = self.state
    uri = URI("https://maps.googleapis.com/maps/api/geocode/json?address=#{address},#{city},#{state}&key=#{ENV['PLACE']}")
    @location = Net::HTTP.get_response(uri)
    @json = JSON.parse(@location.body)
    self.latitude = @json['results'][0]['geometry']['location']['lat']
    self.longitude = @json['results'][0]['geometry']['location']['lng']
  end
end
