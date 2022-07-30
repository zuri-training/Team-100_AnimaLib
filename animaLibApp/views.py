from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail, get_connection, EmailMultiAlternatives
from django.conf import settings
from django.template.loader import render_to_string
from django.contrib import messages
from django.contrib.messages import constants as cs
from django.contrib.auth import authenticate, login, logout
from pathlib import Path
import os
from .forms import *
from os.path import basename
# this package allows files to be zipped.
import zipfile

# get the base directory
BASE_DIR = Path(__file__).resolve().parent.parent

MESSAGE_TAGS = {
    cs.ERROR: 'danger'
}



def index(request):
    return render(request, 'animaLibApp/index.html')

# This is a view for the login page of the website.
def log_in(request):
    form = LoginForm()
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        # if the result is not None, then the user is authenticated
        # if the result is true, it means the user has been authenticated
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse('dashboard'))      
        else:
            messages.add_message(request, cs.ERROR, 'Invalid username or password!')
            return HttpResponseRedirect(reverse('login'))      
                
    return render(request, 'animaLibApp/login.html', {'form': form})


# This is the view for the registration page of the website.
def register(request):
    form = RegisterForm()
    # if the user has submitted the form, then we need to process the data.
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        # check if the forms values are actually valid.
        # by valid, we mean that the data is in the correct format.
        if form.is_valid():
            # do not save the form yet.
            form.save(commit = False)
            # get some values from the form
            password = form.cleaned_data['password']
            confirm_password = form.cleaned_data['confirm_password']
            email = form.cleaned_data['email']
                    
            if password != confirm_password:
                messages.add_message(request, cs.ERROR, 'Passwords do not match, try again!')
                return redirect('register')
            else:
                form.save()
                # hash and save the password; immediately; we do not want to save the password in plain text.
                user = newUser.objects.get(username = form.cleaned_data['username'])
                user.set_password(password)
                
                user.save()

                messages.add_message(request, messages.SUCCESS, 'Account was successfully created!')
                return redirect('login')
        
        return render(request, 'animaLibApp/register.html', {'form': form})
    
    return render(request, 'animaLibApp/register.html', {'form': form})




