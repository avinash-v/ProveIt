from flask_restful import Resource,reqparse,fields,marshal
from flask_login import current_user, login_user, logout_user, login_required
from Project.views import userbase,extra
from flask import url_for,request
from Project.models import User
from werkzeug.urls import url_parse
from validate_email import validate_email
#sending mail
from Project import mail
from flask_mail import Message
from Project.config import Config

def send_email(subj, sender, receiver, text_body, html_body):
    mesg = Message(subj, sender=sender, recipients=receiver)
    mesg.body = text_body
    mesg.html = html_body
    mail.send(mesg)

class EmailVer(Resource):
	def post(self):
		if current_user.is_authenticated:
			return {"description" : "You are already logged in " , "url" : url_for('userbase')}
		username = ""
		email = ""

		#if data is sent through the body of the request , as was done earlier
		if not request.headers['Content-Type'] == 'application/json':
			username = request.form["username"]
			email = request.form["email"]
		
		#If data is in Json
		else:
			data = request.get_json()
			#print(data)
			username = data['username']
			email = data['email']
			
		#To check whether input is entered in correct form	
		if username is None :
			return {"description" : "Username is compulsory"}
		if email is None :
			return {"description" : "The email is empty"}
		
		validation = validate_email(email)
		#print(validation)
		if not validation:
			return {"description" : "The email address is not valid"}
		
		#Now to check , first whether the user exists , and if it does
		#if the email is same as that of the one which is fetched
		userdata = User.query.filter_by(username=username).first()
		
		if userdata is None:
			return {"description" : "Username doesn't exist . Please enter correct username"}
		else:
			if not userdata.check_email(email) :
				return {"description" : "Email is incorrect"}
	
		#All input is correct and in the same format
		#before reset mail can be sent , Env variables have to be set. check config.py and email_req.txt for it.
    	#ADMINS = ['admnprvt@gmail.com']
    	#have to send a link to user to reeneter the password , and we need a way to make sure that
    	#the user whose account it is (who has access to mail) , only they are going to change the pwd
    	#for this we use tokens , and popular token standard for this type of process is the JSON Web Token

		token = userdata.get_reset_password_token()
		
		send_email('[ProveIt] Reset Your Password',
               sender=Config.ADMINS[0],
               receiver=[email],
               text_body= 'Reset password',
               html_body="<p>Dear  userdata.username  ,\
               				</p><p> To reset your password \
    								<a href=test.html,token=token, _external=True> \
        							click here \
    						</a>.\
							</p> \
							<p>Alternatively, you can paste the following link in your browser's address bar:</p> \
							<p>test.html (needs to be sent with url,- token=token, external=True)</p> <p>If you have not \
							requested a password reset simply ignore this message.</p> <p>Sincerely,</p> \
							<p>ProveIt Admin</p>")
       	
		return {"description " : "Email has been sent , please check your mail" , "Email" : email}
