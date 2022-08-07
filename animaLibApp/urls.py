from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('support/', contact, name='support'),
    path('signin/',log_in, name='login'),
    path('logout/', log_out, name='logout'),
    path('signup/', register, name='register'),
    path('profile/', profile, name='profile'),
]