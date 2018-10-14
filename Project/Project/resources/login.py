from flask_restful import Resource,reqparse,fields,marshal
from flask_login import current_user, login_user, logout_user, login_required
from Project.views import userbase,extra,home
from flask import url_for,request
from Project.models import User
from werkzeug.urls import url_parse
from flask_cors import CORS,cross_origin
from flask import jsonify
class Login(Resource):
	@cross_origin()
	def post(self):
		if current_user.is_authenticated:
			return {"description":"The user is already logged in","url" : url_for('userbase')}
		json_data = request.get_json(force=True)
		username = json_data["username"]
		print(username)
		password = json_data["password"]
		try :
			next_page = json_data["next"]
		except:
			next_page = None
		if username is None :
			return {"description":"username is required"}
		if password is None :
			return {"description":"password is required"}

		user = User.query.filter_by(username=username).first()
		headers = {
    		"Content-Type": "application/json",
    		}

		if user is None:
			return jsonify({"description" : "The username is invalid"}), 200, headers

		if not user.check_password(password) :
			return {"description" : "The password is incorrect"}

		login_user(user,remember=True)
		#to redirect to correct next page// When coming from login_required pages
		if not next_page or url_parse(next_page).netloc != '' :
			next_page = "http://127.0.0.1/home" #else default next page is home
		return {"decription" : "The user has been successfully logged in","url" : next_page}

class Logout(Resource):
	decorators=[login_required]
	@cross_origin(origins="*")
	def get(self):
		logout_user()
		return {"description" : "The user has been successfully logged out","url" : url_for('extra')}