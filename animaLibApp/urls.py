from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path("login", log_in, name='login'),
    path('register', register, name='register'),
    path('logout', logout, name='logout'),
    path('download', download_library, name='download'),
    path('contact', contact, name='contact'),
    path('documentation', documentation, name='documentation'),
    path('post/<int:pk>/comment', post_comment, name='post_comment')
]
