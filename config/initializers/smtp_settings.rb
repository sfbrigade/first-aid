ActionMailer::Base.smtp_settings = {
    address:              'just90.justhost.com',
    port:                 465,
    domain:               'first-aid.online',
    user_name:            ENV['EMAIL_ADDRESS'],
    password:             ENV['EMAIL_SECRET'],
    authentication:       :login,
    tls:                  true
  }
