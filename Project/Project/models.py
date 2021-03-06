from Project import db # It should be from Project import db
from sqlalchemy.schema import PrimaryKeyConstraint
from flask_login import UserMixin
from Project import login
from werkzeug.security import generate_password_hash, check_password_hash
from Project.config import Config
import jwt
from time import time
from datetime import datetime
class User(UserMixin,db.Model):
    id = db.Column(db.Integer,primary_key = True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(30), index=True, unique=True)
    password_hash = db.Column(db.String(128))

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def set_password(self,password):
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
        
    
    def check_email(self, email):
        return  True if self.email == email else False
    	
    #for email ver
    def get_reset_password_token(self, expires_in=3600):
    	key = Config.SECRET_KEY
    	return jwt.encode({'reset_password': self.id, 'exp': time() + expires_in},key,algorithm='HS256').decode('utf-8')

	#for email ver
    @staticmethod
    def verify_reset_password_token(token):
        key = Config.SECRET_KEY
        try:
            id = jwt.decode(token,key,algorithms=['HS256'])['reset_password']
        except:
        	print("Token has expired or become invalidated , or something went wrong")
        	return
        return User.query.get(id)

@login.user_loader
def load_user(id):
    try:
        return User.query.get(int(id))
    except:
        return None



#Admin has been made as a separate model not inherited because it does not have bio,intersts and all....

class UserProfile(db.Model):
    id = db.Column(db.Integer,db.ForeignKey("user.id"))
    #Thsi will take care of usn for Students,faculty ids ...
    collegeId = db.Column(db.Integer,index=True,unique=True,primary_key= True)

    firstName = db.Column(db.String(30),index=True)
    lastName = db.Column(db.String(30),index=True)
    dob = db.column(db.Date)
    #Assuming only one contact.If there are more than 1 contacts we need to denormalize it and shit...
    contact = db.Column(db.Integer,index=True,unique=True)
    bio = db.Column(db.Text,index=True)
    interests = db.Column(db.Text,index=True)
    skills = db.Column(db.Text,index=True)
    userType = db.Column(db.String(20),index=True)


    __mapper_args__ = {
    'polymorphic_on' : userType
    }


    def __repr__(self):
        return '<UserProfile {}>'.format(self.firstName)


class CollegeRepresentative(UserProfile):
    designation = db.Column(db.String(30),index=True)


    __mapper_args__ = {
    "polymorphic_identity" : "collegeRepresentative"
    }

class Student(UserProfile):
    cgpa = db.Column(db.Integer,index=True,unique=True)

    __mapper_args__ = {
    "polymorphic_identity" : "student"
    }

class Faculty(UserProfile):
    researchBody = db.Column(db.String(30),index=True)

    __mapper_args__ = {
    "polymorphic_identity" : "faculty"
    }

#A separate class for Admin...Do we really need it??
#If yes we will add it ....


class Group(db.Model):
    id = db.Column(db.Integer,index=True,unique=True,primary_key = True)
    name = db.Column(db.String(30),index=True,unique=True)
    domain = db.Column(db.String(30),index=True)
    #WE should check for a referential integrity constarint over here
    owner = db.Column(db.String(30),index=True)
    subOwner = db.Column(db.String(30),index=True)
    abstract = db.Column(db.Text,index=True)
    groupType = db.Column(db.String(20),index=True)

    __mapper_args__= {
    "polymorphic_on" : groupType,
    }

class ResearchGroup(Group):
    __mapper_args__={
    "polymorphic_identity" : "researchgroup"
    }

class ProjectGroup(Group):
    researchGroup = db.Column(db.Integer,db.ForeignKey("group.id"))
    topic = db.Column(db.Text,index=True)
    __mapper_args__={
    "polymorphic_identity" : "projectgroup"
    }
#TODO:
#   ~ functions to map project groups with User Query.
#   ~ Functions to map projects groups in Research group, 

class UserToGroup(db.Model):
    userId = db.Column(db.Integer,db.ForeignKey("user_profile.id"))
    groupId = db.Column(db.Integer,db.ForeignKey("group.id"))
    relationship = db.Column(db.String(10),index=True,default="member")
    role = db.Column(db.String(20),index=True)
    __table_args__ = (PrimaryKeyConstraint(userId,groupId),)  

class GroupFollowersGroup(db.Model):
    groupIdFollowed = db.Column(db.Integer,db.ForeignKey("group.id"))
    groupIdFollower = db.Column(db.Integer,db.ForeignKey("group.id"))   
    __table_args__ = (PrimaryKeyConstraint(groupIdFollower,groupIdFollowed),)

class Post(db.Model):
    id = db.Column(db.Integer,index=True,primary_key=True)
    groupIdPosted = db.Column(db.Integer,db.ForeignKey("group.id"),index=True)
    content = db.Column(db.Text,index=True)
    datetime = db.Column(db.DateTime,default=datetime.utcnow)
    visibility = db.Column(db.String(10),index=True)
    owner = db.Column(db.String(10),index=True)
    __mapper_args__={
    "polymorphic_on" : "owner"
    }

class UserPost(Post):
    userIdOwner = db.Column(db.Integer,db.ForeignKey("user.id"))

    __mapper_args__ = {
    "polymorphic_identity" : "user"
    }

class GroupPost(Post):
    groupIdOwner = db.Column(db.Integer,db.ForeignKey("group.id"))

    __mapper_args__ = {
    "polymorphic_identity" : "group"
    }




