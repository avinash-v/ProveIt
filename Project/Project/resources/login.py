from flask_restful import Resource,reqparse,fields,marshal
from flask_login import current_user, login_user, logout_user, login_required
from Project.views import userbase,extra
from flask import url_for,request
from Project.models import User
from werkzeug.urls import url_parse

class Login(Resource):
	def post(self):
		if current_user.is_authenticated:
			return {"description":"The user is already logged in","url" : url_for('userbase')}
		username = request.form["username"]
		password = request.form["password"]
		if username is None :
			return {"description":"username is required"}
		if password is None :
			return {"description":"password is required"}

		user = User.query.filter_by(username=username).first()

		if user is None:
			return {"description" : "The username is invalid"}

		if not user.check_password(password) :
			return {"description" : "The password is incorrect"}

		login_user(user,remember=True)
		#to redirect to correct next page// When coming from login_required pages
		next_page = request.args.get('next')
		print(next_page)
		if not next_page or url_parse(next_page).netloc != '' :
			next_page = url_for('extra') #else default next page is home
		return {"decription" : "The user has been successfully logged in","url" : next_page}

class Logout(Resource):
	decorators=[login_required]
	def get(self):
		logout_user()
		return {"description" : "The user has been successfully logged out","url" : url_for('extra')}