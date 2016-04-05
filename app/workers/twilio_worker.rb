class TwilioWorker
  include Sidekiq::Worker
  sidekiq_options retry: false

  def perform(user_id, disaster_id)
    @user = User.find(user_id)
    @disaster = Disaster.find(disaster_id)
    message = "#{@user.first_name}, A #{@disaster.category} has occurred! Please visit www.first-aid.online to donate!"
    MessageSender.send_message(@user.cell_phone, message)
  end
end
