class Donation < ActiveRecord::Base
  belongs_to :user
  belongs_to :charity
  belongs_to :disaster

  validates :amount, :user_id, :charity_id, :disaster_id, presence: true
  before_create :to_cents

  private
    def to_cents
      self.amount *= 100
    end

end
