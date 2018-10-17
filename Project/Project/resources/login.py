from flask_restful import Resource,reqparse,fields,marshal
from flask_login import current_user, login_user, logout_user, login_required
from Project.views import userbase,extra,home
from flask import url_for,request
from Project.models import User
from werkzeug.urls import url_parse
from flask_cors import CORS,cross_origin
from flask import jsonify
headers = {"Content-Type": "application/json"}
class Login(Resource):
	@cross_origin(origins="*",supports_credentials=True)
	def post(self):
		print(request.url)
		if current_user.is_authenticated:
			headers = {"Content-Type": "application/json"}
			return jsonify({"description":"The user is already logged in","url" : url_for('userbase')}),200,headers
		json_data = request.get_json(force=True)
		username = json_data["username"]
		print(username)
		password = json_data["password"]
		try :
			next_page = json_data["next"]
		except:
			next_page = None
		headers = {
    		"Content-Type": "application/json",
    		}
		if username is None :
			return jsonify({"description":"username is required"}),200,headers
		if password is None :
			return jsonify({"description":"password is required"}),200,headers

		user = User.query.filter_by(username=username).first()
		if user is None:
			return jsonify({"description" : "The username is invalid"}), 200, headers

		if not user.check_password(password) :
			return jsonify({"description" : "The password is incorrect"}),200,headers

		login_user(user,remember=True)
		#to redirect to correct next page// When coming from login_required pages
		if not next_page or url_parse(next_page).netloc != '' :
			next_page = "http://127.0.0.1/home" #else default next page is home
		return jsonify({"decription" : "The user has been successfully logged in","url" : next_page}),200,headers


#As of now CORS is not working with login_required decorator.ALternative is to use current_user.is_authenticated as Akhil suggested but this wont support next redirect.
#To do that we have to add functionality on the client side i.e. front end.
class Logout(Resource):
	@cross_origin(origins="*",supports_credentials=True)
	@login_required
	def get(self):
		logout_user()
		return jsonify({"description" : "The user has been successfully logged out","url" : url_for('extra')}),200,headers