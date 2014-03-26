class UserMailer < ActionMailer::Base
  default from: "pcosentino88@gmail.com"


  def send_email(user_info)
    @name = user_info[:name]
    @email = user_info[:email]
    @phone = user_info[:phone]
    @description = user_info[:description]
    mail(:to => "pcosentino88@gmail.com", :subject => "Portfolio Notification")
  end
end