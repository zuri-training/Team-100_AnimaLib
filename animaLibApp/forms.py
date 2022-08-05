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
    first_name = forms.CharField(max_length = 100, label='First Name', 
                                       widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Jack'}))
    last_name = forms.CharField(max_length = 100, label='Last Name', 
                                       widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Smith'}))
    email = forms.EmailField(max_length = 100, label='Email', 
                                       widget = forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'jacksmith@gmail.com'}))
    message = forms.CharField(max_length = 1000, label='Message', 
                                       widget = forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Type your message', 'rows': 5}))
