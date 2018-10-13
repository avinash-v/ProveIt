from Project import api
from flask_restful import Resource,reqparse,fields,marshal
from Project.resources.login import Login,Logout
from Project.resources.signup import SignUp
#Remove after testing(Not required)
from flask_login import login_required



api.add_resource(Login,'/login',endpoint='task')
api.add_resource(Logout,'/logout',endpoint ="taskss")
api.add_resource(SignUp,'/signup',endpoint="signupp")