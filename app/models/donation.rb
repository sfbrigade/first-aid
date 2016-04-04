class Donation < ActiveRecord::Base
  belongs_to :user
  belongs_to :charity
  belongs_to :disaster


  before_create :to_cents

  private
    def to_cents
      self.amount *= 100
    end

end
