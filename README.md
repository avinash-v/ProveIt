Project Details:
Research sharing website, where users can register their groups, communicate with team members, and request to join groups.

Directory structure:
* Project : Contains the package for the application , along with the webpages and python files. 
* app : Contains the main flask py file, as well as all tentative templates for webpages
* README.md : This file
* Project.sln : unknown

Documentation Tasks Pending:
* Need to fill in exact software requirements
* Need to order and format document
* Need to revise instructions
* Need to enter more formal details

Webpage descriptions: (to be revised)
* Entry page: Simple introduction to the website, contains a login and signup button
* Login page: Login with username and password.
* Signup page: Signup with username, password and email id.
* Home page: Displays user's profile, contains an edit profile button and will display user's current groups.
* Profile Edit page: DIsplays a form to allow user to reset his info.
* Group page: Displays group posts and details, allows a user to post, and has additional links.
* About us page: Basic page introducing the team.

Webpage Tasks completed:
* Entry page: Webpage with links to login and sign up present.
* Login page: SQL querying, verification and webpage completed.
* Signup page: SQL querying, verification and webpage completed.
* Home page: Group fetching SQL querying and webpage completed, backend pending.
* Profile Edit page: SQL querying completed, verification and webpage pending.
* Group page: Pending
* About us page: Pending

Software requirements:
* Visual Studio 15 with C++
* Python2
* Flask
* flask-mysqldbpip
* virtualenv
* XAMPP
* wheel

Running instructions:
* //in htdocs
* mkdir project
* cd project
* virtualenv flask
* flask/Scripts/pip install flask
* //copy app folder in the git repository to current location (htdocs/project)
* cd flask/Scripts
* activate
* cd ../../app/templates
* pip install mysqlclient-1.3.8-cp36-cp36m-win_amd64.whl
* pip install flask-mysqldb
* cd ..
* //Start XAMPP
* //Run the sql commands in the file createDB.sql in the MySQL server
* python proveit.py

