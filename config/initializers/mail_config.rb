ActionMailer::Base.smtp_settings = {
:address => "smtp.sendgrid.net",
:port => 587,
:authentication => :plain,
:user_name => 'apikey',
:password => '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',
:domain => "heroku.com"
:enable_starttls_auto => true 
}
ActionMailer::Base.delivery_method = :smtp

