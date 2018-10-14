from Project import api
from flask_restful import Resource,reqparse,fields,marshal
from Project.resources.login import Login,Logout
from Project.resources.signup import SignUp
from Project.resources.UserProfiles import UserProfiles
#Remove after testing(Not required)
from flask_login import login_required



api.add_resource(Login,"/login",endpoint='login')
api.add_resource(Logout,'/logout',endpoint ="logout")
api.add_resource(SignUp,'/signup',endpoint="signup")
api.add_resource(UserProfiles,"/profile/<username>",endpoint="getprofile")
api.add_resource(UserProfiles,"/profile",endpoint="addProfile")
api.add_resource(UserProfiles,"/profile/update",endpoint="updateProfile")
api.add_resource(UserProfiles,"/profile/delete",endpoint="deleteProfile")
