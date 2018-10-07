#Project Details:
Research sharing website, where users can register their groups, communicate with team members, and request to join groups.

#Directory structure:
/Project : unknown
/app : Contains the main flask py file, as well as all tentative templates for webpages
/README.md : This file
/Project.sln : unknown

#Documentation Tasks Pending:
-Need to fill in exact software requirements
-Need to order and format document
-Need to revise instructions
-Need to enter more formal details

#Webpage Tasks completed:
-Entry page: Incomplete. Sample webpage with links to login and sign up present.
-Login page: SQL querying completed, verification and webpage pending. Sample webpage present.
-Signup page: SQL querying completed, verification and webpage pending. Sample webpage present.
-Home page: Group fetching SQL querying completed, verification and webpage pending.
-Profile Edit page: SQL querying completed, verification and webpage pending.
-Group page: Pending
-About us page: Pending

#Software requirements:
-Visual Studio 15 with C++
-Python2
-Flask
-f;ask-mysqldbpip
-virtualenv
-XAMPP
-wheel

#Running instructions:
//in htdocs
-mkdir project
-cd project
-virtualenv flask
-flask/Scripts/pip install flask
//copy app folder in the git repository to current location (htdocs/project)
-cd flask/Scripts
-activate
-cd ../../app/templates
-pip install mysqlclient-1.3.8-cp36-cp36m-win_amd64.whl
-pip install flask-mysqldb
-cd ..
//Start XAMPP
//Run the sql commands in the file createDB.sql in the MySQL server
-python proveit.py