from django import forms
from .models import *

class RegisterForm(forms.ModelForm):
    confirm_password = forms.CharField(max_length = 100, label='Confirm Password',
                                       widget = forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Confirm your password'}))
    class Meta:
        model = newUser
        fields = ['name', 'username', 'email', 'password', 'confirm_password']
        widgets = {'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your name'}),
                   'username': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your username'}),
                   'email': forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Enter your email'}),
                   'password': forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Enter your password'}),
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
    name = forms.CharField(max_length = 100, label='Name',
                                       widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your name'}))
    email = forms.EmailField(max_length = 100, label='Email',
                                       widget = forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Enter your email'}))
    subject = forms.CharField(label = 'Subject', widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your subject'}))
    message = forms.CharField(max_length = 1000, label='Message',
                                       widget = forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Enter your message', 'rows': 4}))

class CommentForm(forms.ModelForm):
    """For for posting comments"""

    class Meta:
        model = Post
        fields = ('title', 'text')

        widgets = {
            'title': forms.TextInput(
                attrs = {
                    'class': 'form-control',
                    'placeholder': 'Title of Post'
                }
            ),
            'text': forms.Textarea(
                attrs = {
                    'class': 'form-control',
                    'placeholder': 'Enter post body'
                }
            )
        }

class ReplyCommentForm(forms.ModelForm):
    """Form for replying comments"""

    class Meta:
        model = Comment
        fields = ('text',)

        widgets = {
            'text': forms.TextInput(
                attrs = {
                    'class': 'form-control',
                    'placeholder': 'Add Comments'
                }
            )
        }

class EditCommentForm(forms.ModelForm):
    """Form for replying comments"""

    class Meta:
        model = Post
        fields = ('title', 'text',)

        widgets = {
            'title': forms.TextInput(
                attrs = {
                    'class': 'form-control',
                    'placeholder': 'Title'
                }
            ),
            'text': forms.TextInput(
                attrs = {
                    'class': 'form-control',
                    'placeholder': 'Add Comments'
                }
            )
        }

