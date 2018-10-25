class PagesController < ApplicationController

	def index
	end
	def heating
	end

	def air
	end

	def repair
	end

	def discounts
	end

	def testimonials
	end

	def warranties
	end

	def contact
	end

	def careers
	end

 	def send_email
      user_name =  "#{params[:user][:first_name]} #{params[:user][:last_name]}"
      email_address = params[:user][:email_address]
      notes = params[:user][:notes]
      phone = params[:user][:phone]
      UserMailer.send_email({:name => user_name, :email => email_address, :description => notes, :phone => phone}).deliver
      respond_to :js
 	end


end