from Project import db
from flask_restful import Resource,reqparse,fields,marshal
from flask_login import current_user, login_user, logout_user, login_required
from Project.views import userbase,extra,home
from flask import url_for,request
from Project.models import User
from werkzeug.urls import url_parse
from Project.models import UserProfile
from Project.models import Student
from flask_cors import CORS,cross_origin
from flask import jsonify
headers ={"Content-Type": "application/json"}
class RecommenderSystem(Resource):
	decorators= [login_required]
	@cross_origin()
	def get(self,username):
		u = User.query.filter_by(username=username).first()
		u = UserProfile.query.filter_by(id=u.id).first()
		bio = u.bio
		interests = u.interests
		if( len(bio) == 0 and len(interests) == 0 ):
			return jsonify({"description" : "The interests and the bio field is empty, please enter them before requesting for a recomendation"}),200,headers
		# assume that the list of projects as of now are stored in an array - projarray, we should extract this from database, for now we will assume a hardcoded array
		proj_array=["machine learning robot","share market analytics","cognitive science", "blockchain transacations"]

		# assumptions - interests are comma seperated words, and bio is a string

		#extracting krywords from interests is comparitively simple
		interests_keywords = interests.split(',')


		# for extracting keywords from bio, we have to parse the text 
		# rake algorithm is being used
		import rake
		stoppath = "SmartStoplist.txt"
		# 1. initialize RAKE by providing a path to a stopwords file
		rake_object = rake.Rake(stoppath, 3, 1, 1) #keywords should be of length atleast 3, phrases should be of length 1 word because we're more interested in words, and minimum frequency
													#for it to be classified should be 1 itself after removing the stopwords.


		# 2. run on RAKE on the bio of the user

		keywords = rake_object.run(bio)
		#keywords is a list of tuples having first parameter as keyword and second parameter as keyword score in each tuple.
		bio_keywords = []
		for i in range(len(keywords)):
			bio_keywords.append(keywords[i][0]) #form another list having only the keywords without the accuracies

		total_keywords_extracted_from_bio_and_interests_with_duplicates = bio_keywords + interests_keywords #form a list having concatenation of keywords extracted from interests and bio
		total_keywords_extracted_from_bio_and_interests = list(set(total_keywords_extracted_from_bio_and_interests_with_duplicates)) #removes duplicates

		proj_to_be_returned =[]
		for i in proj_array:
			for j in i:
				if( j in total_keywords_extracted_from_bio_and_interests):
					proj_to_be_returned.append(i)
					break

		proj_to_be_returned1 = json.dumps(proj_to_be_returned)

		return jsonify({ 'Projects recommended' : proj_to_be_returned1}),200,headers



