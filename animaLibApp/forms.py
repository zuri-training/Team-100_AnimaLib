from django import forms
from .models import *

class RegisterForm(forms.ModelForm):
    class Meta:
        model = newUser
        fields = ['username', 'email', 'password']
        widgets = {
                   'username': forms.TextInput(attrs={'class': 'form-control fname', 'placeholder': 'Jack Smith'}),
                   'email': forms.EmailInput(attrs={'class': 'form-control eaddress', 'placeholder': 'jacksmith@gmail.com'}),
                   'password': forms.PasswordInput(attrs={'class': 'form-control bi bi-eye', 'placeholder': 'Password', 'id': 'togglePassword'}),
        }

class LoginForm(forms.ModelForm):
    class Meta:
        model = newUser
        fields = ['username', 'password']
        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your username'}),
            'password': forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Enter your password'}),
        }

class contactForm(forms.Form):
    first_name = forms.CharField(max_length = 100, label='First Name',
                                       widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Jack'}))
    last_name = forms.CharField(max_length = 100, label='Last Name',
                                       widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Smith'}))
    email = forms.EmailField(max_length = 100, label='Email',
                                       widget = forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'jacksmith@gmail.com'}))
    message = forms.CharField(max_length = 1000, label='Message',
                                       widget = forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Type your message', 'rows': 5}))

class CommentForm(forms.ModelForm):
    """For for posting comments"""

    class Meta:
        model = Post
        fields = ('text',)

        widgets = {
            'text': forms.TextInput(
                attrs = {
                    'class': 'container2 searchbox sidebysidebox move2 form-control',
                    'placeholder': 'Add a comment'
                }
            )
        }

        labels = {
            'text':''
        }

class ReplyCommentForm(forms.ModelForm):
    """Form for replying comments"""

    class Meta:
        model = Comment
        fields = ('text',)

        widgets = {
            'text': forms.TextInput(
                attrs = {
                    'class': 'container2 searchbox sidebysidebox move2 form-control',
                    'placeholder': 'Reply to comment'
                }
            )
        }

class EditCommentForm(forms.ModelForm):
    """Form for replying comments"""

    class Meta:
        model = Post
        fields = ('text',)

        widgets = {
            'text': forms.TextInput(
                attrs = {
                    'class': 'container2 searchbox sidebysidebox move2 form-control',
                    'placeholder': 'Edit comment'
                }
            )
        }



