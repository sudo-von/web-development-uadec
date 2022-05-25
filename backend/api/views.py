from django.shortcuts import render

from .models import *

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import *
# Create your views here.

@api_view(['GET'])
def apiTest(request):
    api_urls={
        'List':'Cuando veas List te traeras un arreglo de objetos',
        'Detail':'Cuando veas detail te traeras los datos de un solo objeto',
        'Create':'Cuando veas create podras enviar datos para crear un nuevo objeto',
        'Update':'Cuando veas update podras enviar datos para actualizar un objeto por su id',
        'Delete':'Cuando veas delete podras eliminar un objeto por su id'
    }
    
    return Response(api_urls)

#////////////////////////////////////////////////API VIEWS FOR STATE//////////////////////////////////////////////

#///GET A LIST OF OBJECTS TYPE STATE IN A JSON //////////////////////////////
@api_view(['GET'])
def stateList(request):
    states=State.objects.all()
    serializer=stateSerializer(states,many=True)
    return Response(serializer.data)

#///////////////////GET THE DATA OF THE SELECTED STATE ONLY////////////////////
@api_view(['GET'])
def stateDetail(request,pk):
    states=State.objects.get(id=pk)
    serializer=stateSerializer(states,many=False)
    return Response(serializer.data)

#//////////////CREATE NEW STATE/////////////////////////////////////////
@api_view(['POST'])
def stateCreate(request):
    serializer=stateSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

#///////////////UPDATE A STATE INFORMATION////////////////////
@api_view(['POST'])
def stateUpdate(request,pk):
    states=State.objects.get(id=pk)
    serializar=stateSerializer(instance=State,data=request.data)
    
    if serializar.is_valid():
        serializar.save()
        
    return Response(serializar.data)

#/////////////DELETE A STATE BY IT ID/////////////////////////
@api_view(['DELETE'])
def stateDelete(request,pk):
    states=State.objects.get(id=pk)
    states.delete()
    
    return Response("Registro eliminado")


#////////////////////////////////////////////////API VIEWS FOR MODEL//////////////////////////////////////////////

#///GET A LIST OF OBJECTS TYPE MODEL IN A JSON //////////////////////////////
@api_view(['GET'])
def modelList(request):
    models=Model.objects.all()
    serializer=modelSerializer(models,many=True)
    return Response(serializer.data)

#///////////////////GET THE DATA OF THE SELECTED MODEL ONLY////////////////////
@api_view(['GET'])
def modelDetail(request,pk):
    models=Model.objects.get(id=pk)
    serializer=modelSerializer(models,many=False)
    return Response(serializer.data)

#//////////////CREATE NEW MODEL/////////////////////////////////////////
@api_view(['POST'])
def modelCreate(request):
    serializer=modelSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

#///////////////UPDATE MODEL INFORMATION////////////////////
@api_view(['POST'])
def modelUpdate(request,pk):
    models=Model.objects.get(id=pk)
    serializar=modelSerializer(instance=Model,data=request.data)
    
    if serializar.is_valid():
        serializar.save()
        
    return Response(serializar.data)

#/////////////DELETE A MODEL BY  ID/////////////////////////
@api_view(['DELETE'])
def modelDelete(request,pk):
    models=Model.objects.get(id=pk)
    models.delete()
    
    return Response("Registro eliminado")



#////////////////////////////////////////////////API VIEWS FOR CITY//////////////////////////////////////////////

#///GET A LIST OF OBJECTS TYPE CITY IN A JSON //////////////////////////////
@api_view(['GET'])
def cityList(request):
    cities=City.objects.all()
    serializer=citySerializer(cities,many=True)
    return Response(serializer.data)

#///////////////////GET THE DATA OF THE SELECTED CITY ONLY////////////////////
@api_view(['GET'])
def cityDetail(request,pk):
    cities=City.objects.get(id=pk)
    serializer=citySerializer(cities,many=False)
    return Response(serializer.data)

#//////////////CREATE NEW CITY/////////////////////////////////////////
@api_view(['POST'])
def cityCreate(request):
    serializer=citySerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

#///////////////UPDATE  CITY INFORMATION////////////////////
@api_view(['POST'])
def cityUpdate(request,pk):
    cities=City.objects.get(id=pk)
    serializar=citySerializer(instance=City,data=request.data)
    
    if serializar.is_valid():
        serializar.save()
        
    return Response(serializar.data)

#/////////////DELETE  CITY BY  ID/////////////////////////
@api_view(['DELETE'])
def cityDelete(request,pk):
    cities=City.objects.get(id=pk)
    cities.delete()
    
    return Response("Registro eliminado")


#////////////////////////////////////////////////API VIEWS FOR HOUSE//////////////////////////////////////////////

#///GET A LIST OF OBJECTS TYPE HOUSE IN A JSON //////////////////////////////
@api_view(['GET'])
def houseList(request):
    houses=House.objects.all()
    serializer=houseSerializer(houses,many=True)
    return Response(serializer.data)

#///////////////////GET THE DATA OF THE SELECTED HOUSE ONLY////////////////////
@api_view(['GET'])
def houseDetail(request,pk):
    houses=House.objects.get(id=pk)
    serializer=houseSerializer(houses,many=False)
    return Response(serializer.data)

#//////////////CREATE NEW HOUSE/////////////////////////////////////////
@api_view(['POST'])
def houseCreate(request):
    serializer=houseSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

#///////////////UPDATE  HOUSE INFORMATION////////////////////
@api_view(['POST'])
def houseUpdate(request,pk):
    houses=House.objects.get(id=pk)
    serializar=houseSerializer(instance=House,data=request.data)
    
    if serializar.is_valid():
        serializar.save()
        
    return Response(serializar.data)

#/////////////DELETE  HOUSE BY  ID/////////////////////////
@api_view(['DELETE'])
def houseDelete(request,pk):
    houses=House.objects.get(id=pk)
    houses.delete()
    
    return Response("Registro eliminado")