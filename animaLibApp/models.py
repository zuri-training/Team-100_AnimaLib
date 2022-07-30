from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager, User
from django.utils.translation import gettext_lazy as _

# Create your models here.
class CustomAccountManager(BaseUserManager):
    def create_superuser(self, email, username, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        
        if other_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True'))
        if other_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True'))
        
        return self.create_user(email, username, password, **other_fields)
            
            
    
    def create_user(self, email, username, password, **other_fields):
        if not email:
            raise ValueError(_('Users must have an email address'))
        if not username:
            raise ValueError(_('Users must have a username'))
        
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **other_fields)
        user.set_password(password)
        user.save()
        return user
    
# we are creating a custom user model that will be used to create a user account
# and will be used to authenticate the user
class newUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), max_length=254, unique=True)
    username = models.CharField(max_length=254, unique=True)
    name = models.CharField(max_length=254, blank=True)
    # recently added.
    user_image = models.ImageField(default='default.png', upload_to='user_profile')
    
    date_joined = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default = False)
    is_active = models.BooleanField(default = True)
    
    objects = CustomAccountManager()
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']
    
    def __str__(self):
        return self.username
    


    
