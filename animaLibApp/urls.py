from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('support/', contact, name='support'),
    path('profile/', profile, name='profile'),
]
