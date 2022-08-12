from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea
# Register your models here.

class UserAdminConfig(UserAdmin):
    # Admin can either search with email address or with username.
    search_fields = ('email','username',)
    # arrange the record in descending order of date joined.
    ordering = ('-date_joined',)
    # change the display of the user
    list_display = ('username', 'email','name','date_joined', 'is_staff','is_active',)
    # Arrange the fields in nice partitions.
    fieldsets = (
        (None, {'fields': ('username', 'email')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser',)}),
        ('Personal',{'fields': ('name','user_image','date_joined', 'last_login',)}),
    )

    # These are the fields we want displayed on the admin page whenever we want to create a new user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('id', 'username', 'email', 'name','user_image','password1', 'password2', 'is_staff', 'is_superuser', 'is_active'),}
        ),
    )

register = admin.site.register

register(newUser, UserAdminConfig)
register(Post); register(Comment)
register(Like)
register(saved_animation)
register(animations)
