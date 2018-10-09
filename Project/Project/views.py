"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template, flash, redirect, url_for, request, session
from werkzeug.urls import url_parse
from Project import app, db
from Project.others.forms import LoginForm, RegistrationForm
from flask_login import current_user, login_user, logout_user, login_required
from Project.models import User
import json

from flask_oauth import OAuth

#Google Oauth credentials
GOOGLE_CLIENT_ID = '215508935254-1h7h7m0uu0bv79e1j5io7dun0do1pktu.apps.googleusercontent.com'
GOOGLE_CLIENT_SECRET = 'LO0zUYsNyKv8CycagUyOHN43'
REDIRECT_URI = '/oauth2callback'

oauth = OAuth()

google = oauth.remote_app('google',
                          base_url='https://www.google.com/accounts/',
                          authorize_url='https://accounts.google.com/o/oauth2/auth',
                          request_token_url=None,
                          request_token_params={'scope': 'https://www.googleapis.com/auth/userinfo.email',
                                                'response_type': 'code'},
                          access_token_url='https://accounts.google.com/o/oauth2/token',
                          access_token_method='POST',
                          access_token_params={'grant_type': 'authorization_code'},
                          consumer_key=GOOGLE_CLIENT_ID,
                          consumer_secret=GOOGLE_CLIENT_SECRET)


@app.route('/test')  #temp google sign in
def index():
    access_token = session.get('access_token')
    if access_token is None:
        return redirect(url_for('login_g'))

    access_token = access_token[0]
    from urllib.request import Request, urlopen, URLError

    headers = {'Authorization': 'OAuth ' + access_token}
    req = Request('https://www.googleapis.com/oauth2/v1/userinfo',
                  None, headers)
    try:
        res = urlopen(req)
    except URLError as e:
        if e.code == 401:
            # Unauthorized - bad token
            session.pop('access_token', None)
            return redirect(url_for('login_g'))
        return res.read()
        

    #return res.read()
    dataUser = json.loads(res.read())
    #return dataUser["name"]
    
    user = User.query.filter_by(email=dataUser["email"]).first()
    if user is None:
            flash('Invalid User')
            return redirect(url_for('signup'))
    
    login_user(user,remember=True)
    return redirect(url_for('userbase'))








@app.route('/login_g')
def login_g():
    callback = url_for('authorized', _external=True)
    return google.authorize(callback=callback)


@app.route('/')
@app.route('/home')
def home():
    """Renders the home page."""
    return render_template(
        'home.html',
        title='Home Page',
        year=datetime.now().year,
    )

@app.route('/contact')
def contact():
    """Renders the contact page."""
    return render_template(
        'contact.html',
        title='Contact',
        year=datetime.now().year,
        message='Your contact page.'
    )

@app.route('/about')
def about():
    """Renders the about page."""
    return render_template(
        'about.html',
        title='About',
        year=datetime.now().year,
        message='Your application description page.'
    )

@app.route('/login', methods=['GET','POST'])
def login():
    """Renders the Log In page"""
    #If user is already logged in:
    if current_user.is_authenticated:
        return redirect(url_for('userbase'))
    #else
    form = LoginForm()
    if form.validate_on_submit():
        #flash('Login req for user {}'.format(form.username.data))
        user = User.query.filter_by(username=form.username.data).first()

        #authenticate
        if user is None or not user.check_password(form.password.data):
            flash('Invalid User')
            return redirect(url_for('login'))

        #correctly logged in
        login_user(user,remember=True)

        #to redirect to correct next page// When coming from login_required pages
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '' :
            next_page = url_for('extra') #else default next page is home

        return redirect(next_page)
        pass
    return render_template(
        'login.html',
        title = 'Login',
        year = datetime.now().year,
        message = 'Your Login Page',
        form = form
        )

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('extra'))

@app.route('/user')
@login_required
def userbase():
    return redirect(url_for('extra'))

@app.route('/signup',methods=['GET','POST'])
def signup():
    """Renders the Sign Up page"""
    if current_user.is_authenticated:
        return redirect(url_for('userbase'))

    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username = form.username.data,email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Congratulations, You have successfully joined ProveIt! ')
        return redirect(url_for('login'))
    return render_template(
        'signup.html',
        title = 'Sign Up',
        year = datetime.now().year,
        message = 'Your Sign Up Page',
        form = form
        )

@app.route('/extra')
def extra():
    return render_template(
        'index.html',
        title = 'Alt Home',
        year = datetime.now().year,
        message = 'alternate home'
        )

@app.route(REDIRECT_URI)
@google.authorized_handler
def authorized(resp):
    access_token = resp['access_token']
    session['access_token'] = access_token, ''
    return redirect(url_for('index'))


@google.tokengetter
def get_access_token():
    return session.get('access_token')
