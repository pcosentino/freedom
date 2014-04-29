class UserMailer < ActionMailer::Base
  default from: "freedomfp2006@sbcglobal.net"


  def send_email(user_info)
    @name = user_info[:name]
    @email = user_info[:email]
    @phone = user_info[:phone]
    @description = user_info[:description]
    mail(:to => "freedomfp2006@sbcglobal.net", :subject => "Work Order Ticket From Freedom Site")
  end
end