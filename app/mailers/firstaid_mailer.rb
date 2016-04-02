class FirstaidMailer < ApplicationMailer
  default from: "todd@first-aid.online"
  layout 'mailer'

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'Welcome to First-Aid')
  end
end
