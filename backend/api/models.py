from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Model(models.Model):
    Description=models.CharField(max_length=250)
    
    
class State(models.Model):
    Description=models.CharField(max_length=250)

class City(models.Model):
    Description=models.CharField(max_length=250)
    IdState=models.ForeignKey(State,on_delete=models.CASCADE)
    
class House(models.Model):
    Description=models.CharField(max_length=250)
    CP=models.CharField(max_length=250)
    Price=models.FloatField()
    Rooms=models.IntegerField()
    Baths=models.IntegerField()
    IdModel=models.ForeignKey(Model,on_delete=models.CASCADE)
    IdCity=models.ForeignKey(City,on_delete=models.CASCADE)
    IdState=models.ForeignKey(State,on_delete=models.CASCADE)
    
