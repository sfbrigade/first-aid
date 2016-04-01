class Donation < ActiveRecord::Base
  belongs_to :user
  belongs_to :charity
  belongs_to :disaster
end
