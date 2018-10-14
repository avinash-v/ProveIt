from flask_restful import Resource,reqparse,fields,marshal
from flask_login import current_user, login_user, logout_user, login_required
from Project.views import userbase,extra,home
from flask import url_for,request
from Project.models import User
from werkzeug.urls import url_parse
from Project.models import UserProfile
from Project.models import Student
class UserProfiles(Resource):
	decorators= [login_required]
	def get(self,username):
		if username is None:
			return {"description" : "The username is NULL"}

		u = UserProfile.query.filter_by(username=username).first()
		if u is None:
			return {"description" : "The username does not exist.Please enter a valid username"}

		if u.userType is "student":
			return {"description":"The user profile is:","usn":u.collegeId,"first name":u.firstName,"last Name":u.lastName,"contact":u.contact,"bio":u.bio,"interests":u.interests,"cgpa":u.cgpa}
		if u.userType is "collegeRepresentative":
			return {"description":"The user profile is:","usn":u.collegeId,"first name":u.firstName,"last Name":u.lastName,"contact":u.contact,"bio":u.bio,"interests":u.interests,"designation":u.designation}
		if u.userType is "faculty":
			return {"description":"The user profile is:","usn":u.collegeId,"first name":u.firstName,"last Name":u.lastName,"contact":u.contact,"bio":u.bio,"interests":u.interests,"research body":u.researchBody}


	def post(self):
		json_data = request.get_json(force=True)
		try:
			username = json_data["username"]
		except:
			username = None
		u = User.query.filter_by(username=username).first()
		Id = current_user.id
		if u.id != Id:
			return "description:'You cannot update someone elses profile'"
		try:
			collegeId = json_data["collegeId"]
		except:
			collegeId = None
		u = UserProfile.query.filter_by(collegeId = collegeId).first()
		if u is not None :
			return "The usn already exists.Please enter a valid usn"
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

		student = Student(id=Id,collegeId=collegeId,firstName=firstName,lastName=lastName,contact=contact,bio=bio,interests=interests)

		db.session.add(student)
		db.session.commit()
		return {"description" : "The profile has been updated successfully"}
