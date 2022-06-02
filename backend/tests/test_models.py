from django.test import TestCase

# Python
from PIL import Image
import tempfile
import json

# Django Rest Framework
from rest_framework.test import APIClient
from rest_framework import status

# Models
from django.contrib.auth.models import User
from api.models import *


class UserTestCase(TestCase):
    def setUp(self):
        user = User(
            email='testing_login@mail.com',
            username='testing_login'
        )
        user.set_password('admin123')
        user.save()

    def test_signup_user(self):
        client = APIClient()
        response = client.post(
                '/api/register/', {
                'email': 'testing1_login@mail.com',
                'password': 'rc{4@qHjR>!b`yAV',
                'password_confirmation': 'rc{4@qHjR>!b`yAV',
                'username': 'testing1'
            },
            format='multipart'
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(json.loads(response.content), {"username":"testing1","email":"testing@cosasdedevs.com"})

    
    def test_login_user(self):

        client = APIClient()
        response = client.post(
                '/api/login', {
                'email': 'testing_login@mail.com',
                'password': 'admin123',
            },
            format='json'
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        
        result = json.loads(response.content)
        self.assertIn('access_token', result)