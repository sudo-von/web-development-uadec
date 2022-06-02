from pickle import TRUE
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Counter(models.Model):
    register=models.IntegerField()
    Description=models.CharField(max_length=250)
    
    
class State(models.Model):
    Description=models.CharField(max_length=250)

class City(models.Model):
    Description=models.CharField(max_length=250)
    IdState=models.ForeignKey(State,on_delete=models.CASCADE)
    
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class House(models.Model):
    Description=models.CharField(max_length=250)
    CP=models.CharField(max_length=250)
    Price=models.FloatField()
    Rooms=models.IntegerField()
    Baths=models.IntegerField()
    IdCity=models.ForeignKey(City,on_delete=models.CASCADE)
    IdState=models.ForeignKey(State,on_delete=models.CASCADE)
    is_sold=models.BooleanField(default=False)
    house_image=models.ImageField(upload_to=upload_to, blank=True, null=True)
    location=models.CharField(max_length=450,null=True)
    
class Contact(models.Model):
    Name=models.CharField(max_length=250)
    Email=models.CharField(max_length=250)
    Msg=models.CharField(max_length=250)
