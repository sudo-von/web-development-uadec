from django.urls import path

from . import views

urlpatterns = [
    path('', views.apiTest, name='testapi'),
    path('state-list', views.stateList, name='listStates'),
    path('state-detail/<str:pk>/', views.stateDetail, name='detailState'),
    path('state-create/', views.stateCreate, name='createState'),
    path('state-update/<str:pk>/', views.stateUpdate, name='updateState'),
    path('state-delete/<str:pk>/', views.stateDelete, name='deleteState'),
    path('model-list', views.modelList, name='listModels'),
    path('model-detail/<str:pk>/', views.modelDetail, name='detailModel'),
    path('model-create/', views.modelCreate, name='createModel'),
    path('model-update/<str:pk>/', views.modelUpdate, name='updateModel'),
    path('model-delete/<str:pk>/', views.modelDelete, name='deleteModel'),
    path('city-list', views.cityList, name='listCities'),
    path('city-detail/<str:pk>/', views.cityDetail, name='detailCity'),
    path('city-create/', views.cityCreate, name='createCity'),
    path('city-update/<str:pk>/', views.cityUpdate, name='updateCity'),
    path('city-delete/<str:pk>/', views.cityDelete, name='deleteCity'),
    path('house-list', views.houseList, name='listHouses'),
    path('house-detail/<str:pk>/', views.houseDetail, name='detailHouse'),
    path('house-create/', views.houseCreate, name='createHouse'),
    path('house-update/<str:pk>/', views.houseUpdate, name='updateHouse'),
    path('house-delete/<str:pk>/', views.houseDelete, name='deleteHouse'),
]