"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template, flash, redirect, url_for, request
from werkzeug.urls import url_parse
from Project import app, db
from Project.others.forms import LoginForm, RegistrationForm
from flask_login import current_user, login_user, logout_user, login_required
from Project.models import User

@app.route('/')
@app.route('/home')
def home():
    """Renders the home page."""
    return render_template(
        'index.html',
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
            next_page = url_for('home') #else default next page is home

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
    return redirect(url_for('home'))

@app.route('/user')
@login_required
def userbase():
    return redirect(url_for('home'))

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
        'home.html',
        title = 'Alt Home',
        year = datetime.now().year,
        message = 'alternate home'
        )
