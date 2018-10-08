from flask_wtf import FlaskForm
import wtforms
from wtforms.validators import DataRequired, ValidationError,Email,EqualTo,Length
from Project.models import User


class LoginForm(FlaskForm):
    username = wtforms.StringField('Username', validators=[DataRequired()])
    password = wtforms.PasswordField('Password', validators=[DataRequired()])
    remember_me = wtforms.BooleanField('Remember Me')
    submit = wtforms.SubmitField('Log In')


class RegistrationForm(FlaskForm):
    username = wtforms.StringField('Username',validators=[DataRequired()])
    email = wtforms.StringField('Email',validators=[DataRequired(),Email()])
    password = wtforms.PasswordField('Password',validators=[DataRequired(), Length(min=8, max=80)])
    password2 = wtforms.PasswordField('Repeat Password', validators=[DataRequired(),EqualTo('password')])
    submit = wtforms.SubmitField('Sign Up')
    
    #Custom validators, wtforms validates along with stock validators, validate_<fieldname>
    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user is not None:
            raise ValidationError('Please use a different username.')
            #Since it is a custom validator

    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user is not None:
            raise ValidationError('Please use a different email address.')