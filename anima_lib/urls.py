from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('animalib100_admin/', admin.site.urls),
    path('', include('animaLibApp.urls')),
]

handler404 = 'animaLibApp.views.error_404'
handler500 = 'animaLibApp.views.error_500'