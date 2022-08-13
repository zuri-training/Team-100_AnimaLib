from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager, User
from django.utils.translation import gettext_lazy as _
from cloudinary.models import CloudinaryField
import uuid

from django.conf import settings

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
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(_('email address'), max_length=254, unique=True)
    username = models.CharField(max_length=254, unique=True)
    name = models.CharField(max_length=254, blank=True)
    # recently added.
    user_image = CloudinaryField('image',blank=True)
    date_joined = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default = False)
    is_active = models.BooleanField(default = True)

    objects = CustomAccountManager()
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username


# Interaction Model

class Post(models.Model):
    """
    Model for users to post
    """
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(default=timezone.now, blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class Comment(models.Model):
    """Model for users comment on posts
    """
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING)
    text = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ['created_on']

    def __str__(self):
        return '{} commented: {}'.format(self.author, self.text)
    
# models to like and unlike the animations
class Like(models.Model):
    """Model for users to like posts
    """
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='likes')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    state = models.BooleanField(default=True)

    def __str__(self):
        return '{} likes: {}'.format(self.user, self.post)

# models to have the names of the animations.
# This excludes the codes.    
class animations(models.Model):
    animation_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255, blank=False)
    styleCode = models.CharField(max_length = 255, blank=False)
    description = models.TextField(blank=False)
    dateCreated = models.DateTimeField(auto_now_add=True)
    lastUpdated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
   
# model to save a particular animation generated. 
class saved_animation(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='user_animation')
    animation = models.ForeignKey(animations, on_delete=models.CASCADE, related_name='saved_animation')
    code_generated = models.TextField(blank=False)
    dategenerated = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.user.username + ' ' + self.animation.name
    
    
    


