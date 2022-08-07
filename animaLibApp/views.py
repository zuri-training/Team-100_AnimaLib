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
import re
from .forms import *
from os.path import basename
import cloudinary.uploader
from .models import *
# this package allows files to be zipped.
import zipfile

# get the base directory
BASE_DIR = Path(__file__).resolve().parent.parent

MESSAGE_TAGS = {
    cs.ERROR: 'danger'
}

# views to capture errors, just incase a user tries to access a page that does not exist.
def error_404(request, exception):
    return render(request, 'animaLibApp/error404.html')

# view to handle error 500;
def error_500(request, *args, **argv):
    return render(request, 'animaLibApp/error500.html', status=500)


def index(request):
    return render(request, 'animaLibApp/index.html')

# This is a view for the login page of the website.
def log_in(request):
    form = LoginForm()
    if request.method == 'POST':
        # get the username
        username = request.POST.get('fname', '')
        # get the password.
        password = request.POST.get('password', '')
        # authenticate the user now.
        user = authenticate(request, username=username, password=password)
        # if the result is not None, then the user is authenticated
        # if the result is true, it means the user has been authenticated
        if user is not None:
            login(request, user)
            next_page = request.GET.get('next', None)
            # if the user was trying to access a page that requires authentication, 
            # then redirect back to that page of the website
            if next_page is not None:
                return redirect(next_page)
            return HttpResponseRedirect(reverse('index'))      

            return HttpResponseRedirect(reverse('index'))      
        else:
            messages.add_message(request, cs.ERROR, 'Invalid username or password!')
            return HttpResponseRedirect(reverse('login'))      
                
    return render(request, 'animaLibApp/login.html', {'form': form})


# This is the view for the registration page of the website.
def register(request):
    form = RegisterForm()
    special_characters = "'!@#$%^&*()-+?_=,<>/"

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
            email = form.cleaned_data['email']
            # check if the password has atleast 8 characters of which atleast 1 is a special character.      
            if not validate(password):
                messages.add_message(request, cs.ERROR, 'Please ensure that the password is at least 8 characters long with 1 or more special characters.')
                return redirect('register')
            else:
                form.save()
                # hash and save the password; immediately; we do not want to save the password in plain text.
                user = newUser.objects.get(username = form.cleaned_data['username'])
                user.set_password(password)
                user.user_image = "null.png"
                    
                user.save()

                messages.add_message(request, messages.SUCCESS, 'Account was successfully created!')
                return redirect('login')
        
        return render(request, 'animaLibApp/register.html', {'form': form})
    
    return render(request, 'animaLibApp/register.html', {'form': form})

# this is the view for the contact page of the website
def contact(request):
    form = contactForm()
    sender = settings.EMAIL_HOST_USER
    # open connection
    connection = get_connection()
    connection.open()

    if request.method == 'POST':
        # get the form data
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        message = request.POST['message']
        
        mail_content = {
            'name': first_name + ' ' + last_name, 'sender': email, 'message': message
        }
        
        # # render the email template to a string
        message = render_to_string('mailer/contact.html', mail_content)
        mes = EmailMultiAlternatives(f'contact', '',sender, ["davidakwuruu@gmail.com"],
                                     connection = connection)
        mes.attach_alternative(message, "text/html")
        
        if mes.send():
            messages.add_message(request, messages.SUCCESS, f'Thank you {first_name} for your message')
        else:
            messages.add_message(request, cs.ERROR, 'An error occured, please try again!')
        # close the connection
        connection.close()
        
    return render(request, 'animaLibApp/contact.html', {'form': form})

# defining the logout view
@login_required(login_url='/signin')
def log_out(request):
    logout(request)
    return redirect('index')

# this view allows a user to download the library as a zip file to their local machine
def download_library(request):
    if request.user.is_authenticated:
        files = ["style.css","script.js"]
        file_path = os.path.join("animaLibApp","static","library")
        real_path = os.path.join(BASE_DIR, file_path)
        # lets zip the file right away.
        with zipfile.ZipFile('animalibt100.zip', 'w') as zipF:
            for file in files:
                zipF.write(os.path.join(real_path,file), basename(os.path.join(real_path,file)),compress_type = zipfile.ZIP_DEFLATED)
        # download the files that was generated. 
        response = HttpResponse(open(os.path.join(BASE_DIR,"animalibt100.zip"), 'rb'), content_type='application/zip')
        response['Content-Disposition'] = 'attachment; filename=animalibt100.zip'
        return response
    else:
        messages.add_message(request, cs.ERROR, 'Please create an account to download the library!')
        return redirect('register')
  
# for the profile page of the website
@login_required(login_url='/signin')
def profile(request):
    
    if request.method == "POST":
        picture = request.FILES['picture']
        email = request.POST.get('email', None)
        password = request.POST.get('password', None)
        username = request.POST.get('username', None)
        username = username.replace('@', '')
        get_user = newUser.objects.get(username=username)
        
        
        # if the image has been uploaded, just check once if it's above the size we've specified.
        if check(picture) is False and picture != '':
            messages.add_message(request, cs.ERROR, 'image should not be more than 2MB')
            return redirect('profile')
        
        # This part of the code would be optimized into a function later.
        # If the email address is empty, then do this.
        if email.strip() == '':
            if picture == '' and password.strip() != '':
                if validate(password):
                    get_user.set_password(password)
                    get_user.save(update_fields = ['password'])
                    messages.add_message(request, messages.SUCCESS, 'Update was carried out successfully')
                else:
                    messages.add_message(request, cs.ERROR, 'Opps! you password should be at least 8 characters long and must have atleast one special_characters')
                
            elif picture != '' and password.strip() != '':
                
                if validate(password):
                    get_user.set_password(password)
                    get_user.user_image = cloudinary.uploader.upload_resource(request.FILES['picture'])
                    get_user.save(update_fields = ['password','user_image'])
                    messages.add_message(request, messages.SUCCESS, 'Update was carried out successfully')
                else:
                    messages.add_message(request, cs.ERROR, 'Opps! you password should be at least 8 characters long and must have atleast one special_characters')
           
            elif picture != '' and password.strip() == '':
                    get_user.user_image = cloudinary.uploader.upload_resource(request.FILES['picture'])
                    get_user.save(update_fields = ['user_image'])
                    messages.add_message(request, messages.SUCCESS, 'Update was carried out successfully')
            else:
                messages.add_message(request, cs.ERROR, 'there is nothing to update')
            return redirect('profile')

        # If the email address is not empty, then do this.
        else:
            if newUser.objects.filter(email = email).count() > 0:
                messages.add_message(request, cs.ERROR, 'email already exists!')
                return redirect('profile')
            
            if isvalidEmail(email) is False:
                messages.add_message(request, cs.ERROR, 'Email address is not valid!')
                return redirect('profile')
                
            if picture == '' and password.strip() != '':
                if validate(password):
                    get_user.set_password(password)
                    get_user.email = email
                    get_user.save(update_fields = ['password','email'])
                    messages.add_message(request, messages.SUCCESS, 'Update was carried out successfully')

                else:
                    messages.add_message(request, cs.ERROR, 'Opps! you password should be at least 8 characters long and must have atleast one special_characters')
                
            elif picture != '' and password != '':
                if validate(password):
                    get_user.set_password(password)
                    get_user.user_image = cloudinary.uploader.upload_resource(request.FILES['picture'])
                    get-user.save(update_fields=['password','user_image','email'])
                    messages.add_message(request, messages.SUCCESS, 'Update was carried out successfully')
                else:
                    messages.add_message(request, cs.ERROR, 'Opps! you password should be at least 8 characters long and must have atleast one special_characters')
                    
            elif picture != '' and password.strip() == '':
                    get_user.email = email
                    get_user.user_image = cloudinary.uploader.upload_resource(request.FILES['picture'])
                    get_user.save(update_fields = ['email','user_image'])
                    messages.add_message(request, messages.SUCCESS, 'Update was carried out successfully')
            else:
                get_user.email = email
                get_user.save(update_fields=['email'])
                messages.add_message(request, cs.ERROR, 'update was successful')
            return redirect('profile')    
                      
    #get the username
    username = request.user.username
    email_address = request.user.email
    image = request.user.user_image.url
    new_image = image.rsplit('/', 1)[-1]
    if new_image == "null.png":
        image = "https://res.cloudinary.com/dc29czhf9/image/upload/v1659818233/media/default2_zxexum.png"
        
    profile ={"username": username, "email": email_address, "image":image}
    
    return render(request, 'animaLibApp/profile_page.html', profile)


# validates if the user_password matches our requirement.
# The requirement include being atleast 8 character long and must have atleast one special character.
def validate(user_password) -> bool:
    special_characters = "'!@#$%^&*()-+?_=,<>/"
    if len(user_password)< 8 or not any(c in special_characters for c in user_password):
        return False
    return True

# validate if an email address is valid.
def isvalidEmail(email) -> bool:
    pattern = "^\S+@\S+\.\S+$"
    objs = re.search(pattern, email)
    try:
        if objs.string == email:
            return True
    except:
        return False

# check if the image size is more than 2mb or not.   
def check(get_image) -> bool:
    print(get_image.size)
    if get_image.size > 2 * 1024 * 1024:
        return False
    return True
    
    