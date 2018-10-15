from Project import api
from flask_restful import Resource,reqparse,fields,marshal
from Project.resources.login import Login,Logout
from Project.resources.signup import SignUp
from Project.resources.projectBase import ProjectBase, UserProjects
#Remove after testing(Not required)
from flask_login import login_required



api.add_resource(Login,'/login',endpoint='task')
api.add_resource(Logout,'/logout',endpoint ="taskss")
api.add_resource(SignUp,'/signup',endpoint="signupp")
api.add_resource(ProjectBase,'/projects/<string:project_name>',endpoint="getProjectBase") #[GET]- gets project details using projectName, [PUT] - Update Project with the given ProjectName, [POST] -Creates new Project under user
api.add_resource(UserProjects,'/user/<string:user_name>/projects/',endpoint="getProjectBase2") #[GET] - gets all groups of given user, 
