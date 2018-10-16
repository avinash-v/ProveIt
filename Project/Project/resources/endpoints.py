from Project import api
from flask_restful import Resource,reqparse,fields,marshal
from Project.resources.login import Login,Logout
from Project.resources.signup import SignUp
from Project.resources.projectBase import ProjectBase, UserProjects
from Project.resources.UserProfiles import UserProfiles
from Project.resources.Posts import Posts
#Remove after testing(Not required)
from Project.resources.reset import EmailVer
from flask_login import login_required


api.add_resource(Login,"/login",endpoint='login')
api.add_resource(EmailVer,'/reset',endpoint='email')
api.add_resource(Logout,'/logout',endpoint ="logout")
api.add_resource(SignUp,'/signup',endpoint="signup")
api.add_resource(UserProfiles,"/profile/<username>",endpoint="getprofile")
api.add_resource(UserProfiles,"/profile",endpoint="addProfile")
api.add_resource(UserProfiles,"/profile/update",endpoint="updateProfile")
api.add_resource(UserProfiles,"/profile/delete",endpoint="deleteProfile")
api.add_resource(ProjectBase,'/projects/<string:project_name>',endpoint="getProjectBase") #[GET]- gets project details using projectName, [PUT] - Update Project with the given ProjectName, [POST] -Creates new Project under user
api.add_resource(UserProjects,'/user/<string:user_name>/projects/',endpoint="getProjectBase2") #[GET] - gets all groups of given user, 
api.add_resource(Posts,"/posts/make",endpoint="Post")
api.add_resource(Posts,"/posts/user/get/<username>",endpoint="GetPostUser")