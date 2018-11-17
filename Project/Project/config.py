import os


class Config(object):
	SECRET_KEY = os.environ.get('SECRET_KEY') or 'igpayatinlay'
<<<<<<< HEAD
	SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + '../app.db' # os.path.join("/home/mayank/ProveIt/Project", 'app.db') #change this to your server location, have to set a variable that points to server folder. :/
=======
	SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + '../app.db' 
>>>>>>> 0d864afab9c4d308624cc0617e88ddad86e936ad
	SQLALCHEMY_TRACK_MODIFICATIONS = False #do not signal app everytime a change is made in db
	ELASTICSEARCH_URL = "http://127.0.0.1:9200"
	MAIL_SERVER = os.environ.get('MAIL_SERVER')
	MAIL_PORT = int(os.environ.get('MAIL_PORT') or 25)
	MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS') is not None
	MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
	MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
	ADMINS = ['admnprvt@gmail.com']
