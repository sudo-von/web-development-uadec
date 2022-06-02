from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user

class stateSerializer(serializers.ModelSerializer):
    class Meta:
        model=State
        fields = '__all__'

class citySerializer(serializers.ModelSerializer):
    class Meta:
        model=City
        fields = '__all__'
        
class houseSerializer(serializers.ModelSerializer):
    ciudad_name=citySerializer()
    estado_name=stateSerializer()
    class Meta:
        model=House
        fields = '__all__'
        
class registrySerializer(serializers.ModelSerializer):
    class Meta:
        model=Counter
        fields = '__all__'