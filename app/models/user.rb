class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :donations
  has_many :charities, through: :donations
  has_many :disasters, through: :donations

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  before_create :lng_lat

  def full_name
    "#{first_name} #{last_name}"
  end

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

  def test_email
    @user = User.last
    MailWorker.perform_in(1.minute, @user.id)
  end
end
