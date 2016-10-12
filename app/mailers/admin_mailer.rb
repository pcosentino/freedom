class AdminMailer < ActionMailer::Base
  def user_added
		mail(:to => “cosepaol88@email.com”, :subject => “New friend added”)
	end
end
