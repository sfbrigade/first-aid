class MailWorker
  include Sidekiq::Worker
  sidekiq_options retry: false

  def perform(user_id)
    p '-' * 25
    p user = User.find(user_id)
    FirstaidMailer.welcome_email(user).deliver_now
  end
end