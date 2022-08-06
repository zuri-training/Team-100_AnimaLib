from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('documentation/', documentation, name='documentation'),
    path('documentation/introduction/', introduction, name='introduction'),
    path('documentation/showAnimations/', showAnimations, name='showAnimations'),
    path('support/', contact, name='support'),
    path('about/', about_us, name='about'),




]
   

