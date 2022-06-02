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

from knox.models import AuthToken


tokken=''



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
                'username': 'testing1'
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
        tokken=token
        self.assertIn('token', result)
        

class StateTestCase(TestCase):
    
    def setUp(self):
        estado = State(
            Description='estado3'
        )
        estado.save()
    
        
    # def test_create_state(self):
    #     client = APIClient()
    #     print(tokken)
    #     #client.credentials()
    #     client.credentials(HTTP_AUTHORIZATION='Token ' + tokken)
        
    #     response = client.post(
    #             '/api/state-create/', {
    #             'Description': 'testState'
    #         },
    #         format='json'
    #     )
    #     print(response.content)
    #     self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        
    def test_get_state_list(self):
        client = APIClient()
        
        response = client.get(
                '/api/state-list'
        )
        print(response.content)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_state_detail(self):
        client = APIClient()
        #print(tokken)
        #client.credentials()
        #client.credentials(HTTP_AUTHORIZATION='Token ' + tokken)
        
        response = client.get(
                '/api/state-detail/6/'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        

class CityTestCase(TestCase):
    def setUp(self):
        estado = State(
            Description='estado1'
        )
        estado.save()
        
        ciudad = City(
            Description='ciudad1',
            IdState=estado
        )
        ciudad.save()
    
        
    def test_get_city_list(self):
        client = APIClient()
        
        response = client.get(
                '/api/city-list'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_city_detail(self):
        client = APIClient()
        #print(tokken)
        #client.credentials()
        #client.credentials(HTTP_AUTHORIZATION='Token ' + tokken)
        
        response = client.get(
                '/api/city-detail/1/'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        

class HouseTestCase(TestCase):
    def setUp(self):
        estado = State(
            Description='estado2'
        )
        estado.save()
        
        ciudad = City(
            Description='ciudad2',
            IdState=estado
        )
        ciudad.save()
        
        casa=House(
            Description='Casa1',
            CP='1231',
            Price=1231,
            Rooms=2,
            Baths=1,
            IdCity=ciudad,
            IdState=estado,
            is_sold=False,
            location='test location'
        )
        
        casa.save()
        
    
    def test_get_house_list(self):
        client = APIClient()
        
        response = client.get(
                '/api/house-list'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
    def test_get_house_list_filter(self):
        client = APIClient()
        
        response = client.get(
                '/api/house-list?cpcs=123'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_house_detail(self):
        client = APIClient()

        response = client.get(
                '/api/house-detail/1/'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
 
