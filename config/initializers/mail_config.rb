ActionMailer::Base.smtp_settings = {
     :address              => "smtp.gmail.com",
     :port                 => 587,
     :domain               => "gmail.com",
     :user_name            => 'pcosentino88@gmail.com',
     :password             => 'gr33nlight',
     :authentication       => 'plain',
:enable_starttls_auto => true }
