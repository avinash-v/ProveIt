from flask_restful import Resource,reqparse,fields,marshal
from flask_login import current_user, login_user, logout_user, login_required
from Project.views import userbase,extra
from flask import url_for,request
from Project.models import User
from werkzeug.urls import url_parse
from Project import db
#Added to validate the email
from validate_email import validate_email
#Added to check the strength of the password
import passwordmeter
from flask_cors import CORS,cross_origin
from flask import jsonify
#DEsigned keeping in mind AJAX Otherwise we have to display all the errors
headers ={"Content-Type": "application/json"}
class SignUp(Resource):
	@cross_origin(origins="*",supports_credentials=True)
	def post(self):
		if current_user.is_authenticated:
			return jsonify({"description" : "The user is already logged in" , "url" : url_for('userbase')}),200,headers
		json_data = request.get_json(force=True)
		print(json_data)
		username = json_data["fullName"]
		email = json_data["email"]
		password = json_data["password"]
		password2 = json_data["confirmPassword"]
		if username is None :
			return jsonify({"description" : "The username is empty"}),200,headers
		user = User.query.filter_by(username=username).first()
		if user is not None:
			return jsonify({"description" : "The user already exists"}),200,headers
		#Inlcude a regex to check valid username like should not begin with a digit
		if email is None :
			return jsonify({"description" : "The email is empty"}),200,headers
		#Validating the email
		valid_email = validate_email(email)
		if not valid_email :
			return jsonify({"description" : "The email address is not valid"}),200,headers
		user = User.query.filter_by(email=email).first()
		if user is not None:
			return jsonify({"description" : "The email address has already been used.Please use a different one"}),200,headers
		if password is None :
			return jsonify({"description" : "The password is empty"}),200,headers
		#The following three lines check the strength of the password
		#strength , improvements = passwordmeter.test(password)
		#print(strength)
		#if strength < 0.2 :
		#	return {"description" : "The password is too weak","improvements" : improvements}
		if len(password) <8 or len(password) > 32 :
			return jsonify({"description" : "The password length must be between 8 and 32 characters"}),200,headers
		if password2 != password :
			return jsonify({"description" : "The passwords do not match"}),200,headers
		user = User(username = username, email= email)
		user.set_password(password)
		db.session.add(user)
		db.session.commit()

		return jsonify({"description" : "You have successfully signed up for Proveit!","url" : "WE have to give a url"}),200,headers

