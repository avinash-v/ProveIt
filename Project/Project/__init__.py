"""
The flask application package.
"""

from flask import Flask
from Project.config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_restful import Api
from flask_cors import CORS
from flask_mail import Mail
app = Flask(__name__)
#To support CORS
CORS(app, supports_credentials=True)
api = Api(app)
app.config.from_object(Config)
#Config.init_app(app)
db = SQLAlchemy(app)
mail = Mail(app)
migrate = Migrate(app, db)
login = LoginManager(app)
login.login_view = 'login' # for @login_required pages using flask_login

import Project.views, Project.models , Project.resources.endpoints
