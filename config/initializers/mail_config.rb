ActionMailer::Base.smtp_settings = {
:address => "smtp.sendgrid.net",
:port    => 25,
:authentication => :plain,
:user_name => 'freedomfp2006@sbcglobal.net',
:password => 'morgan120973',
:domain => "heroku.com"
:enable_starttls_auto => true 
}
ActionMailer::Base.delivery_method = :smtp


:port => 587,

:user_name => ENV["SENDGRID_USERNAME"],
:password => ENV["SENDGRID_PASSWORD"],


