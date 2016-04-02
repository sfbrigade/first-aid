class Charity < ActiveRecord::Base
  has_many :donations
  has_many :users, through: :donations
  has_many :disasters, through: :donations
end
