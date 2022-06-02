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


token=''

class UserTestCase(TestCase):
    def setUp(self):
        user = User(
            email='testing_login@mail.com',
            username='testing_login'
        )
        user.set_password('Password@123')
        user.save()

    def test_signup_user(self):
        client = APIClient()
        response = client.post(
                '/api/register', {
                'email': 'testing1_login@mail.com',
                'password': 'Password@123',
                'username': 'testing_login'
            },
            format='json'
        )
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        result = json.loads(response.content)
        self.assertIn('token', result)

    
    def test_login_user(self):

        client = APIClient()
        response = client.post(
                '/api/login', {
                'username': 'testing_login',
                'password': 'Password@123',
            },
            format='json'
        )
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        result = json.loads(response.content)
        dicc=result
        token=dicc['token']
        self.assertIn('token', result)
        

class StateTestCase(TestCase):
        
    def test_create_state(self):
        client = APIClient()
        #client.credentials(HTTP_AUTHORIZATION='Token ' + token)
        user = User.objects.get(username='testing_login')
        client.force_authenticate(user=user)
        response = client.post(
                '/api/state-create/', {
                'Description': 'testState'
            },
            format='json'
        )
        print(response.content)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

 
