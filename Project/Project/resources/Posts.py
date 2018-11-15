#ToDO: Put a filter on the posts contents .

from flask_restful import Resource,reqparse,fields,marshal
from flask_login import current_user, login_user, logout_user, login_required
from Project.views import userbase,extra,home
from flask import url_for,request
from Project.models import User,GroupPost,UserPost,Post,load_user
from werkzeug.urls import url_parse
from flask_cors import CORS,cross_origin
from flask import jsonify
from datetime import datetime
from Project import db
import json
from profanity import profanity
from datetime import timedelta

headers = {"Content-Type": "application/json"}


'''
def crossdomain(origin=None, methods=None, headers=None, max_age=21600,
                attach_to_all=True, automatic_options=True):
    """Decorator function that allows crossdomain requests.
      Courtesy of
      https://blog.skyred.fi/articles/better-crossdomain-snippet-for-flask.html
    """
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    if headers is not None and not isinstance(headers, list):
        headers = ', '.join(x.upper() for x in headers)
    if not isinstance(origin, list):
        origin = ', '.join(origin)
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        """ Determines which methods are allowed
        """
        if methods is not None:
            return methods

        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        """The decorator function
        """
        def wrapped_function(*args, **kwargs):
            """Caries out the actual cross domain code
            """
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers
            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            h['Access-Control-Allow-Credentials'] = 'true'
            h['Access-Control-Allow-Headers'] = \
                "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator

'''
class Posts(Resource):
	#decorators = [login_required]
	@cross_origin(origins="*",supports_credentials=True)
	def post(self):
		json_data = request.get_json(force=True)
		try:
			userId = json_data["userId"]
		except:
			userId = None

		current_user = load_user(userId)
		try:
			groupIdPosted = json_data["groupId"]
		except:
			groupIdPosted = None
		try:
			content = json_data["content"]
		except:
			content = None

		if content is not None :
			if profanity.contains_profanity(content):
				res = "The post contents offensive language therefore we are censoring it"
			content = profanity.censor(content)
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
	@cross_origin(origins="*",supports_credentials=True)		
	def get(self,userId):
		if userId is None :
			return jsonify({"description" : "The userId is None."}),200,headers
		current_user = load_user(userId)
		u = User.query.filter_by(username=current_user.username).first()
		if u == None :
			print("Hey")
			return jsonify({"description" : "The user does not exist"}),200,headers


		if current_user.id == u.id :
			posts = UserPost.query.filter_by(userIdOwner = u.id)
		else:
			posts = UserPost.query.filter_by(userIdOwner = u.id,visibility="public")

		response = []
		for i in posts:
			post = {"name" :current_user.username,"groupId":i.groupIdPosted,"content":i.content,"datetime" : str(i.datetime)}
			response.append(post)

		return jsonify(response),200,headers

	def put(self):
		json_data = request.get_json(force=True)
		print("Hey")
		post_id = json_data["id"]

		post = Post.query.filter_by(id=post_id).first()
		print("Hey")
		if post==None:
			return {"description":"The post you are trying to update does not exist"}
		try:
			content = json_data["content"]
		except:
			content = post.content
		
		datetime1 = datetime.utcnow()

		try:
			visibility = json_data["visibility"]
		except:
			visibility = post.visibility

		post.content = content
		post.visibility = visibility
		post.datetime = datetime1

		db.session.commit()

		return {"description" : "The post has been updated successfully"}

	def delete(self,id):
		post = Post.query.filter_by(id=id).first()

		if(current_user.id != post.owner):
			return {"description" : "You cannot delete someone elses post"}

		if(post==None):
			return {"description" : "No such post exists"}

		Post.query.filter_by(id=id).delete()

		db.session.commit()

		return {"description" : "The post has been deleted successfully"}











		
