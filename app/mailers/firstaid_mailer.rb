class FirstaidMailer < ApplicationMailer
  default from: "Firs+Aid <admin@first-aid.online>"
  layout 'mailer'

  def welcome_email(user)
    @user = user
    mail(to: "#{@user.full_name} <#{@user.email}>", subject: 'Thank You for Registering')
  end

  def alert_email(user, disaster)
    @user = user
    @disaster = disaster
    mail(to: "#{@user.full_name} <#{@user.email}>", subject: 'New Disaster Reported')
  end
end
