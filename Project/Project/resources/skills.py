import re
import math
from collections import Counter
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

class SkillRecommender(Resource):
	decorators= [login_required]
	@cross_origin()
	def get(self,username):
		#u = User.query.filter_by(username=username).first()
				
		if username is None:
			return jsonify({"description" : "The username is NULL"}),200,headers
		u = User.query.filter_by(username=username).first()
				
		u = UserProfile.query.filter_by(id=u.id).first()
		#text1 is the list of skills of the user
		print(u)
		if u is None:
			return jsonify({"description" : "The username does not exist.Please enter a valid username"}),200,headers
				
		text1=u.skills
		#text2 is the list of skills from the group table
		#It is in the form of group_id,skills
		text2=[[1,"Java, C programming, R programming"],[3,"NodeJs, HTML, CSS"],[5,"C programming, Java, Python"],[8,"NodeJs, Java"]]
		text3=[[1,"SE Project"],[2,"Chatbot App"],[3,"Proveit"],[5,"NGO Website"],[8,"Brownie"]]
		
		WORD = re.compile(r'\w+')

		def get_cosine(vec1, vec2):
		     intersection = set(vec1.keys()) & set(vec2.keys())
		     numerator = sum([vec1[x] * vec2[x] for x in intersection])

		     sum1 = sum([vec1[x]**2 for x in vec1.keys()])
		     sum2 = sum([vec2[x]**2 for x in vec2.keys()])
		     denominator = math.sqrt(sum1) * math.sqrt(sum2)
		     if not denominator:
		         return (0)
		     else:
		         return float(numerator) / denominator

		def text_to_vector(text):
		     words = WORD.findall(text)
		     return Counter(words)


		vector1 = text_to_vector(text1)
		l=[]
		val=-11111
		for i in range(len(text2)):
			vector2 = text_to_vector(text2[i][1])
			cosine = get_cosine(vector1, vector2)
			l.append(cosine)
			#print 'Project id: ',text2[i][0],'Cosine:', cosine
			if(cosine>val):
				val=cosine
				projid=text2[i][0]
		for i in range(len(text3)):
			if(text3[i][0]==projid):
				projname=text3[i][1]
				#max=val
		#print 'Max Project id', projid, 'Similarity: ',val
		#print 'Recommendation for user: See project_id ', projid #Return the projid of max similarity between text1 and text2
		#projid_list=[]
		#projid_list.append(projid)		
		#projid_returned = jsonify(projid_list)

		return jsonify({ 'Projects recommended based on skills are' : projname}),200,headers

