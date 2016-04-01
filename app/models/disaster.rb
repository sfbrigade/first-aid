class Disaster < ActiveRecord::Base
  has_many :charities_disasters
  has_many :charities, through: :charities_disasters
end
