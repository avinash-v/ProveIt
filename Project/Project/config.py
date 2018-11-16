import os


class Config(object):
	SECRET_KEY = os.environ.get('SECRET_KEY') or 'igpayatinlay'
	SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + '../app.db' 
	SQLALCHEMY_TRACK_MODIFICATIONS = False #do not signal app everytime a change is made in db
	ELASTICSEARCH_URL = "http://127.0.0.1:9200"
	MAIL_SERVER = os.environ.get('MAIL_SERVER')
	MAIL_PORT = int(os.environ.get('MAIL_PORT') or 25)
	MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS') is not None
	MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
	MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
	ADMINS = ['admnprvt@gmail.com']
