class AlertWorker
  include Sidekiq::Worker
  sidekiq_options retry: false

  def perform(user_id, disaster_id)
    user = User.find(user_id)
    disaster = Disaster.find(disaster_id)
    FirstaidMailer.alert_email(user, disaster).deliver_now
  end
end
