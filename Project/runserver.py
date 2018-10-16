"""
This script runs the Project application using a development server.
"""

from os import environ
from Project import app, db
from Project.models import User, UserProfile,Student,CollegeRepresentative,Faculty,Group,ResearchGroup,ProjectGroup,UserToGroup

@app.shell_context_processor
def make_shell_context():
    return {'db':db,'User':User,'UserProfile':UserProfile,'Student':Student,'CollegeRepresentative':CollegeRepresentative,'Faculty':Faculty,'Group':Group,'ResearchGroup':ResearchGroup,'ProjectGroup':ProjectGroup,'UserToGroup':UserToGroup}

if __name__ == '__main__':
    HOST = environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(environ.get('SERVER_PORT', '5555'))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT,debug=True)
