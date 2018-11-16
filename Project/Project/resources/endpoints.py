from Project import api
from flask_restful import Resource,reqparse,fields,marshal
from Project.resources.login import Login,Logout
from Project.resources.signup import SignUp
from Project.resources.projectBase import ProjectBase, UserProjects
from Project.resources.UserProfiles import UserProfiles
from Project.resources.Posts import Posts
from Project.resources.SearchResources import Search
from Project.resources.fileUploads import FileUploads
from Project.resources.recommenderSystem import RecommenderSystem
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
api.add_resource(RecommenderSystem,"/profile/recommend",endpoint="recommendationSystem")


api.add_resource(ProjectBase,'/projects/<string:project_name>',endpoint="ProjectGroupBase") #[GET]- gets project details using projectName, [PUT] - Update Project with the given ProjectName, [POST] -Creates new Project under user
api.add_resource(UserProjects,'/user/<string:user_name>/projects/',endpoint="UserProjects") #[GET] - gets all groups of given user, 
api.add_resource(Posts,"/posts/make",endpoint="Post")
api.add_resource(Posts,"/posts/user/get/<userId>",endpoint="GetPostUser")
api.add_resource(Posts,"/posts/update",endpoint="UpdatePostUser")
api.add_resource(Posts,"/posts/delete/<int:id>",endpoint="DeletePostUser")

api.add_resource(Search,"/search/<query>",endpoint="Search")
api.add_resource(FileUploads,"/upload",endpoint="FileUploads")
api.add_resource(FileUploads,"/upload/<filename>",endpoint="GetFileUploads")

