ActionMailer::Base.smtp_settings = {
     :address              => "smtp.mail.yahoo.com",
     :port                 => 25,
     :user_name            => 'freedomfp2006@sbcglobal.net',
     :password             => 'morgan120973',
     :authentication       => :plain,
		 :enable_starttls_auto => true }
