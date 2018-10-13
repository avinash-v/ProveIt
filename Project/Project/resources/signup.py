from flask_restful import Resource,reqparse,fields,marshal
from flask_login import current_user, login_user, logout_user, login_required
from Project.views import userbase,extra
from flask import url_for,request
from Project.models import User
from werkzeug.urls import url_parse
#Added to validate the email
from validate_email import validate_email
#Added to check the strength of the password
import passwordmeter
#DEsigned keeping in mind AJAX Otherwise we have to display all the errors
class SignUp(Resource):
	def post(self):
		if current_user.is_authenticated:
			return {"description" : "The user is already logged in" , "url" : url_for('userbase')}

		username = request.form["username"]
		email = request.form["email"]
		password = request.form["password"]
		password2 = request.form["password2"]
		if username is None :
			return {"description" : "The username is empty"}
		user = User.query.filter_by(username=username).first()
		if user is not None:
			return {"description" : "The user already exists"}
		#Inlcude a regex to check valid username like should not begin with a digit
		if email is None :
			return {"description" : "The email is empty"}
		#Validating the email
		valid_email = validate_email(email)
		if not valid_email :
			return {"description" : "The email address is not valid"}
		user = User.query.filter_by(email=email).first()
		if user is not None:
			return {"description" : "The email address has already been used.Please use a different one"}
		if password is None :
			return {"description" : "The password is empty"}
		#The following three lines check the strength of the password
		strength , improvements = passwordmeter.test(password)
		print(strength)
		if strength < 0.6 :
			return {"description" : "The password is too weak","improvements" : improvements}
		if len(password) <8 or len(password) > 32 :
			return {"description" : "The password length must be between 8 and 32 characters"}
		if password2 != password :
			return {"description" : "The passwords do not match"}
		user = User(username = username, email= email)
		user.set_password(password)
		db.session.add(user)
		db.session.commit()

		return {"description" : "You have successfully signed up for Proveit!","url" : url_for("login")}

