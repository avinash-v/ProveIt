from flask_restful import Resource,reqparse,fields,marshal
from flask_login import current_user, login_user, logout_user, login_required
from Project.views import userbase,extra,home
from flask import url_for,request
from Project.models import User,GroupPost,UserPost,Post
from werkzeug.urls import url_parse
from flask_cors import CORS,cross_origin
from flask import jsonify
from datetime import datetime
from Project import db
import json
from profanity import profanity

headers = {"Content-Type": "application/json"}

class Search(Resource):
	decorators = [login_required]
	@cross_origin()
	def get(self,query):
		results = Post.search(query)
		return results
