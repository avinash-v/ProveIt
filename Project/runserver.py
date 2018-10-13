"""
This script runs the Project application using a development server.
"""

from os import environ
from Project import app, db
from Project.models import User

@app.shell_context_processor
def make_shell_context():
    return {'db':db,'User':User}

if __name__ == '__main__':
    HOST = environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(environ.get('SERVER_PORT', '5555'))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT,debug=True)
