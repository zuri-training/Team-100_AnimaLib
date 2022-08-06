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
    path('documentation/introduction/', introduction, name='introduction'),
    path('documentation/showAnimations/', showAnimations, name='showAnimations'),
    path('support/', contact, name='support'),
    path('post/<int:pk>/comment', post_comment, name='post_comment'),
    path('post/<int:pk>/edit', post_update, name='post_update'),
    path('post/<int:pk>/delete', post_remove, name='post_remove'),
]
