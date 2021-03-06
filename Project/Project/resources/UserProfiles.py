from Project import db
from flask_restful import Resource,reqparse,fields,marshal
from flask_login import current_user, login_user, logout_user, login_required
from Project.views import userbase,extra,home
from flask import url_for,request
from Project.models import User
from werkzeug.urls import url_parse
from Project.models import UserProfile,load_user
from Project.models import Student
from flask_cors import CORS,cross_origin
from flask import jsonify
headers ={"Content-Type": "application/json"}
class UserProfiles(Resource):
	#decorators= [login_required]
	@cross_origin(origins="*",supports_credentials=True)
	def get(self,userId):
		if userId is None:
			return jsonify({"description" : "The username is NULL"}),200,headers
		current_user = load_user(userId)
		u = User.query.filter_by(username=current_user.username).first()
		print(u)
		u = UserProfile.query.filter_by(id=u.id).first()
		if u is None:
			return jsonify({"description" : "The username does not exist.Please enter a valid username"}),200,headers

		if u.userType == "student":
			return jsonify({"description":"The user profile is:","usn":u.collegeId,"username" : current_user.username,"firstName":u.firstName,"lastName":u.lastName,"userType" : u.userType,"contact":u.contact,"bio":u.bio,"interests":u.interests,"cgpa":u.cgpa , "skills":u.skills}),200,headers
		if u.userType == "collegeRepresentative":
			return jsonify({"description":"The user profile is:","usn":u.collegeId,"username" : current_user.username,"firstName":u.firstName,"lastName":u.lastName,"userType": u.userType,"contact":u.contact,"bio":u.bio,"interests":u.interests,"designation":u.designation}),200,headers
		if u.userType == "faculty":
			return jsonify({"description":"The user profile is:","usn":u.collegeId,"username": current_user.username,"firstName":u.firstName,"lastName":u.lastName,"userType":u.userType,"contact":u.contact,"bio":u.bio,"interests":u.interests,"research body":u.researchBody}),200,headers

	@cross_origin(origins="*",supports_credentials=True)
	def post(self):
		json_data = request.get_json(force=True)
		try:
			userId = json_data["userId"]
		except:
			userId = None
		current_user = load_user(userId)
		u = User.query.filter_by(username=current_user.username).first()
		Id = current_user.id
		if u.id != Id:
			return jsonify({"description:'You cannot add someone elses profile'"}),200,headers
		try:
			collegeId = json_data["collegeId"]
		except:
			collegeId = None
		u = UserProfile.query.filter_by(collegeId = collegeId).first()
		if u is not None :
			return jsonify({"description":"The usn already exists.Please enter a valid usn"}),200,headers
		try:
			firstName = json_data["firstName"]
		except:
			firstName = None
		try:
			lastName = json_data["lastName"]
		except:
			lastName = None
		try:
			contact = json_data["contact"]
		except:
			contact = None
		try:
			bio = json_data["bio"]
		except:
			bio = None
		try:
			interests = json_data["interests"]
		except:
			interests = None

		try:
			userType = json_data["userType"]
		except:
			userType = None
			
		try:
			skills = json_data["skills"]
		except:
			skills = None

		student = UserProfile(id=Id,collegeId=collegeId,firstName=firstName,lastName=lastName,contact=contact,bio=bio,interests=interests,userType=userType,skills=skills)

		db.session.add(student)
		db.session.commit()
		return jsonify({"description" : "The profile has been added successfully"}),200,headers

	@cross_origin()
	def put(self):
		json_data = request.get_json(force=True)
		Id = current_user.id
		u = UserProfile.query.filter_by(id = Id).first()
		print(u.firstName)
		try:
			collegeId = json_data["collegeId"]
		except:
			collegeId = u.collegeId
		u1 = UserProfile.query.filter_by(collegeId = collegeId)
		count = 0
		for i in u1:
			count +=1
		if count>1:
			return jsonify({"description":"The usn already exists.Please enter a valid usn"}),200,headers

		try:
			firstName = json_data["firstName"]
		except:
			firstName = u.firstName
		try:
			lastName = json_data["lastName"]
		except:
			lastName = u.lastName
		try:
			contact = json_data["contact"]
		except:
			contact = u.contact
		u1 = UserProfile.query.filter_by(contact = contact)
		count = 0
		for i in u1:
			count+=1
		if count > 1:				
			return jsonify({"description":"The contact already exists.PLease add another one"}),200,headers
		try:
			bio = json_data["bio"]
		except:
			bio = u.bio
		try:
			interests = json_data["interests"]
		except:
			interests = u.interests

		u.collegeId = collegeId
		u.firstName = firstName
		u.lastName = lastName
		u.contact = contact
		u.bio = bio
		u.interests = interests
		u.skills=skills
		db.session.commit()
		return jsonify({"description" : "The profile has been updated successfully"}),200,headers
#Working partially need to handle a few cases.
	def delete(self):
		Id = current_user.id
		u = UserProfile.query.filter_by(id = Id).first()
		print(u)
		u = UserProfile.query.filter_by(id = Id).delete()

		db.session.commit()
		logout_user()
		return jsonify({"description" : "The user has been deleted successfully"}),200,headers



