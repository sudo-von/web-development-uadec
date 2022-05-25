from rest_framework import serializers
from .models import *

class modelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Model
        fields = '__all__'

class stateSerializer(serializers.ModelSerializer):
    class Meta:
        model=State
        fields = '__all__'

class citySerializer(serializers.ModelSerializer):
    class Meta:
        model=House
        fields = '__all__'
        
class houseSerializer(serializers.ModelSerializer):
    class Meta:
        model=House
        fields = '__all__'