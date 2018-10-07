#Syntax format:
# @app.route() is a decorator that is applied to functions that are run when that url is passed
# render_template() renders the html page specified
# redirect() changes the url to specified


from flask import Flask,render_template,request,redirect,url_for
import MySQLdb

#Flask object
app = Flask(__name__)

#MySQL object
conn = MySQLdb.connect(host="localhost",user="root",password="",db="login_data")

#_index.html functions_
#request default page
@app.route("/")
def index():
	return render_template("index.html", title="entry")

#_signup.html functions_
#request signup page
@app.route("/signUp") 
def signUp():
	return render_template("signup.html",title="signup")

#validate entered user details
def validate(user, password, email):
	return 1

#generate user tokens
def generateUserToken(username):
	return random.randint(0,1000)

#update the user table
def adduser(username, password, email):
	valid = validate(username, password, email)

	if valid == 1:
		usertoken = generateUserToken(username)

		cursor = conn.cursor()
	
		cursor.execute("INSERT INTO user (usertoken,name,password,email)VALUES(%s,%s,%s,%s)",(usertoken,username,password,email))
		conn.commit()
		return 1

	else:
		if valid == -1:
			invalidUserName()
			return 0
		else:
			invalidPassword()
			return 0

#receive submission of the sign in form
@app.route("/signUpSubmit",methods=["POST"])
def signUpSubmit():
	username = str(request.form["user"])
	password = str(request.form["password"])
	email = str(request.form["email"])
	
	if adduser(username, password, email):
		return redirect(url_for("login"))
	else:
		return "failed"


#_login.html functions_

#request login page
@app.route("/login")
def login():
	return render_template("login.html",title="data")

#verify login details
def verifyUser(username, password):
	cursor = conn.cursor()
	cursor.execute("SELECT name FROM user WHERE name ='"+username+"' and password ='"+password+"'")
	user = cursor.fetchone()
	
	if len(user) > 1:
		return 1
	
	return 0

#receive submission of login details
@app.route("/checkUser",methods=["POST"])
def check():
	username = str(request.form["user"])
	password = str(request.form["password"])
	
	if verifyUser(username, password):
		return redirect(url_for("home"))
	else:
		return "failed"

#_profileedit.html functions_
#request profile editing page
@app.route("/profileEdit")
def profileEdit():
	return render_template("profileEdit.html")

#update the profile table
def detailUpdate(usertoken, usn, phoneNo, bio):
	cursor = conn.cursor()
	
	cursor.execute("INSERT INTO userdetails (usertoken,usn,phoneNo,bio)VALUES(%s,%s,%s,%s)",(usertoken,usn,phoneNo,bio))
	conn.commit()
	return 1


#receive submission of updated profile info
@app.route("/detailUpdate")
def detailReceive():
	usn = str(request.form["usn"])
	phoneNo = str(request.form["phoneNo"])
	bio = str(request.form["bio"])

	#We need a way to persist user logins, I have left this for now, as it
	# is a decision we should make together.
	# usertoken ordinarily would be taken from this persisted user session.
	usertoken = "1"
	detailUpdate(usertoken, usn, phoneNo, bio)
	return redirect(url_for("home"))

#_home.html functions_
#request profile editing page
@app.route("/home")
def home():

	#Get usertoken from session
	usertoken = "1"

	#Obtaining groupid of all groups user is a part of
	cursor = conn.cursor()
	cursor.execute("SELECT groupid FROM usergroups WHERE usertoken ='"+usertoken+"'")
	groups = cursor.fetchall()

	#Obtaining details of all groups user is a part of
	groupDetails = []
	for row in groups:
		cursor = conn.cursor()
		cursor.execute("SELECT * FROM groupdetails WHERE groupid ='"+row[1]+"'")
		groupDetail = cursor.fetchone()

		groupDetails.append(groupDetail)

	#returning the group details to the page
	return render_template("home.html", groupDetails)

#main function
if __name__ == "__main__":
	app.run(debug=True)