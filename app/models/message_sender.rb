class MessageSender
  def self.send_message(to, message)
    new.send_message(to, message)
  end
  def initialize
    account_sid = ENV['TWILIO_ACCOUNT_SID']
    auth_token = ENV['TWILIO_AUTH_TOKEN']
    @client = Twilio::REST::Client.new(account_sid, auth_token)
  end

  def send_message(to, message)
    @client.account.messages.create(
      from: ENV['TWILIO_NUMBER'],
      to: to,
      body: message
      )
  end
end
