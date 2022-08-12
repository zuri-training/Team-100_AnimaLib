# validates if the user_password matches our requirement.
import re
from django.urls import reverse
from django.core.mail import send_mail, get_connection, EmailMultiAlternatives
from django.conf import settings
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site  
from django.utils.encoding import force_bytes, force_str  
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.views import View
from django.shortcuts import redirect
from .utils import token_generator
from .utils2 import *

import uuid


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
    
def send_verification_email(request, user, user_email, user_name):
    
    sender = settings.EMAIL_HOST_USER
    connection = get_connection()
    connection.open()
    # get the domain
    # get the absolute url that will be used for verification email
    
    domain = get_current_site(request).domain
    uidb64 = urlsafe_base64_encode(force_bytes(user.pk))
    token = token_generator.make_token(user)
    link = reverse('activate',kwargs={'uidb64':uidb64,'token':token})
    contact_us=reverse('support')
    home_page= reverse('index')
    
    contact_url ='http://{domain}{contact_us}'.format(domain=domain, contact_us=contact_us)
    homepage_url ='http://{domain}{home_page}'.format(domain=domain, home_page=home_page)
    
    url_path= 'http://{domain}{link}'.format(domain=domain, link=link)
    mail_content ={
        'username':user_name,
        'url_path':url_path,
        'contact_us': contact_url,
        'home_page':homepage_url
    }
    
    message = render_to_string('mailer/verification_mail.html', mail_content)
    mes = EmailMultiAlternatives(f'Email verification','',sender, [user_email],
                                     connection = connection)
    
    mes.attach_alternative(message, "text/html")

    if mes.send():
        connection.close()
        return True
    else:
        connection.close()
        return False
    
    
def check(get_image) -> bool:
    print(get_image.size)
    if get_image.size > 2 * 1024 * 1024:
        return False
    return True


def send_forgot_mail(request, user, user_email, user_name):
    
    sender = settings.EMAIL_HOST_USER
    connection = get_connection()
    connection.open()
    # get the domain
    # get the absolute url that will be used for verification email
    domain = get_current_site(request).domain
    uidb64 = urlsafe_base64_encode(force_bytes(user.pk))
    token = email_reset_generator.make_token(user)
    link = reverse('resetpassword',kwargs={'uidb64':uidb64,'token':token})
    home_page= reverse('index')
    
    homepage_url ='http://{domain}{home_page}'.format(domain=domain, home_page=home_page)
    
    url_path= 'http://{domain}{link}'.format(domain=domain, link=link)
    mail_content ={
        'username':user_name,
        'url_path':url_path,
        'home_page':homepage_url
    }
    
    message = render_to_string('mailer/forgetpassword_mail.html', mail_content)
    mes = EmailMultiAlternatives(f'Reset Password','',sender, [user_email],
                                     connection = connection)
    
    mes.attach_alternative(message, "text/html")

    if mes.send():
        connection.close()
        return True
    else:
        connection.close()
        return False

