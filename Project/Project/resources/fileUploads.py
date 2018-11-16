from flask_restful import Resource,reqparse,fields,marshal
from flask_login import current_user, login_user, logout_user, login_required
from Project.views import userbase,extra,home
from flask import url_for,request
from Project.models import User,GroupPost,UserPost,Post
from werkzeug.urls import url_parse
from werkzeug import secure_filename
from flask_cors import CORS,cross_origin
from flask import jsonify
from datetime import datetime
from Project import db,fs
import json
import base64
headers = {"Content-Type": "application/json"}
FILE_TYPES = set(['txt', 'doc', 'docx', 'odt', 'pdf', 'rtf', 'text','jpeg','jpg','png'])
class FileUploads(Resource):
	@cross_origin(origins="*",supports_credentials=True)
	def post(self):	
		print(request.data)
		fs.put(request.data,content_type="jpeg",filename="abbebb123.jpeg",username ="Anurag")
		return jsonify({"description":"The file was uploaded successfully"}),200,headers
		'''uploadedFiles = request.files.getlist("files[]")
		for i in uploadedFiles:
			print(i)
			if '.' in i.filename and (i.filename).rsplit('.', 1)[1] in FILE_TYPES:
				print(i)
				fs.put(i,content_type=i.content_type,filename=secure_filename(i.filename),username ="Anurag")
				return "The file was uploaded successfully"
			else:
				return "THe file extension is not allowed"
		return "No file uploaded"'''
	@cross_origin(origins="*",supports_credentials=True)
	def get(self,filename):
		print(filename)
		if not fs.exists({"filename": filename}):
			return "File does not exist"
		else:
			data = fs.find_one({"filename" : filename})
			res = data.read()
			res = res.split(b"\r\n\r\n")[1]
			res = res.split(b"\r\n--")[0]
			print(res)
			outfilename = "/home/mayank/ProveIt/frontend/src/assets/rworks1.jpeg"
			output= open(outfilename,"wb") 
			output.write(res)
			base64.encodestring(res)
			return jsonify({"description" : "LOL"}),200,headers
			#return res
