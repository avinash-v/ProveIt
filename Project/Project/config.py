import os

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'al34dki'


    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + '../app.db' #change this to your server location, have to set a variable that points to server folder. :/

    SQLALCHEMY_TRACK_MODIFICATIONS = False #do not sigmal app everytime a change is made in db
