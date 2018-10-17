from flask_restful import Resource,reqparse,fields,marshal
from flask_login import current_user, login_user, logout_user, login_required
from Project.views import userbase,extra,home
from flask import url_for,request
from Project.models import User,GroupPost,UserPost
from werkzeug.urls import url_parse
from flask_cors import CORS,cross_origin
from flask import jsonify
from datetime import datetime
from Project import db
import json
headers = {"Content-Type": "application/json"}


class Posts(Resource):
	decorators = [login_required]
	@cross_origin()
	def post(self):
		json_data = request.get_json(force=True)
		try:
			groupIdPosted = json_data["groupId"]
		except:
			groupIdPosted = None
		try:
			content = json_data["content"]
		except:
			content = None
		try:
			visibility = json_data["visibility"]
		except:
			visibility = None

		datetimePost = datetime.utcnow()

		if hasattr(current_user,"domain"):
			groupIdOwner = current_user.id
			postt = GroupPost(groupIdPosted = groupIdPosted ,content = content , visibility = visibility,datetime = datetimePost ,groupIdOwner= groupIdOwner)
		else:
			userIdOwner = current_user.id
			postt = UserPost(groupIdPosted = groupIdPosted ,content = content , visibility = visibility,datetime = datetimePost ,userIdOwner= userIdOwner)
		
		db.session.add(postt)
		db.session.commit()
		return jsonify({"description" : "The post has been successfully made"}),200,headers

	def get(self,username):
		if username is None :
			return jsonify({"description" : "The username is None."}),200,headers
		u = User.query.filter_by(username=username).first()
		if u == None :
			return {"description" : "The username does not exist."}


		if current_user.id == u.id :
			posts = UserPost.query.filter_by(userIdOwner = u.id)
		else:
			posts = UserPost.query.filter_by(userIdOwner = u.id,visibility="public")

		response = []
		for i in posts:
			post = {"id" :i.id,"groupId":i.groupIdPosted,"content":i.content,"datetime" : str(i.datetime)}
			response.append(post)

		return response


		