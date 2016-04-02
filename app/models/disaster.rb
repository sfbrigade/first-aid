class Disaster < ActiveRecord::Base
  has_many :donations
  has_many :users, through: :donations
  has_many :charities, through: :donations
end
