class CharitiesDisaster < ActiveRecord::Base
  belongs_to :disaster
  belongs_to :charity
end
