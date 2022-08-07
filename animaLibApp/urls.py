from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('documentation/', documentation, name='documentation'),
    path('documentation/introduction/', introduction, name='introduction'),
    path('documentation/showAnimations/', showAnimations, name='showAnimations'),
    path('generator/', generator, name='generator'),
     path('support/', contact, name='support'),




]
   

