from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('signin/', log_in, name='login'),
    path('logout/', log_out, name='logout'),
    path('forgotpassword/', forgotpassword, name='forgotpassword'),
    path('resetpassword/<uidb64>/<token>/',
         password_reset, name='resetpassword'),
    path('success/', success, name='success'),
    path('mysaves/', mysaves, name='mysaves'),

    path('signup/', register, name='register'),
    path('download/', download_library, name='download'),
    path('contact/', contact, name='contact'),
    path('documentation/', documentation, name='documentation'),
    path('documentation/introduction/', introduction, name='introduction'),
    path('documentation/showAnimations/',
         showAnimations, name='showAnimations'),
    path('support/', contact, name='support'),
    path('profile/', profile, name='profile'),
    path('about/', about_us, name='about'),
    path('post/<int:pk>/comment', post_comment, name='post_comment'),
    path('post/<int:pk>/edit', post_update, name='post_update'),
    path('post/<int:pk>/delete', post_remove, name='post_remove'),
    path('activate/<uidb64>/<token>/', verification, name='activate'),
    path('generator/', generator, name='generator'),

    path('like/', like, name='like')
]
