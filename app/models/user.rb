class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :donations
  has_many :charities, through: :donations
  has_many :disasters, through: :donations

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook]


  def self.from_omniauth(auth)
    where(email: auth.info.email).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name   # assuming the user model has a name
      user.image = auth.info.image # assuming the user model has an image
      user.save
    end
  end
  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

  before_create :lng_lat

  # def full_name
  #   if name
  #     "#{name}"
  #   else
  #     "#{first_name} #{last_name}"
  #   end
  # end

  private

  def lng_lat
    if self.street_address
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


  def test_email
    @user = User.last
    MailWorker.perform_in(1.minute, @user.id)
  end
end
