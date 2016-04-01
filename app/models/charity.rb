class Charity < ActiveRecord::Base
  has_many :donations
  has_many :users, through: :donations

  has_many :charities_disasters
  has_many :disasters, through: :charities_disasters
end
