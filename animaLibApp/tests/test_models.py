from turtle import title
from django.test import TestCase

# Create your tests here.

from animaLibApp.models import (Post, Comment, newUser)


class PostModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        new_user = newUser.objects.create(email="new_user@animo.com", username="new_user")
        post = Post.objects.create(author=new_user, title="A test title", text="A test body of post")
        print("in test class")

        def test_title_label(self):
            field_label = post.__meta.get_field('title')
            print("in test title label")
            self.assertEqual(field_label, 'title')

        def test_text_label(self):
            field_label = post.__meta.get_field('text')
