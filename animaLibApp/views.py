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


