from django.urls import path
from .views import RegisterAPI
from . import views
from knox import views as knox_views
from .views import LoginAPI

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.apiTest, name='testapi'),
    path('state-list', views.stateList, name='listStates'),
    path('state-detail/<str:pk>/', views.stateDetail, name='detailState'),
    path('state-create/', views.stateCreate, name='createState'),
    path('state-update/<str:pk>/', views.stateUpdate, name='updateState'),
    path('state-delete/<str:pk>/', views.stateDelete, name='deleteState'),
    path('city-list', views.cityList, name='listCities'),
    path('city-state/<str:pk>/', views.cityByState, name='cityState'),
    path('city-detail/<str:pk>/', views.cityDetail, name='detailCity'),
    path('city-create/', views.cityCreate, name='createCity'),
    path('city-update/<str:pk>/', views.cityUpdate, name='updateCity'),
    path('city-delete/<str:pk>/', views.cityDelete, name='deleteCity'),
    path('house-list', views.houseListCustom.as_view(), name='listHouses'),
    path('house-detail/<str:pk>/', views.houseDetail, name='detailHouse'),
    path('house-model/<str:pk>/', views.houseByModel, name='houseModel'),
    path('house-city/<str:pk>/', views.houseByCity, name='houseCity'),
    path('house-state/<str:pk>/', views.houseByState, name='houseState'),
    path('house-create/', views.houseCreate, name='createHouse'),
    path('house-update/<str:pk>/', views.houseUpdate, name='updateHouse'),
    path('house-delete/<str:pk>/', views.houseDelete, name='deleteHouse'),
    path('house-report', views.casas_pdf, name='reportHouses'),
    path('house-detail-report/<str:pk>/', views.casa_info_pdf, name='reportHouseDetail'),
    path('register', RegisterAPI.as_view(), name='register'),
    path('login', LoginAPI.as_view(), name='login'),
    path('logout', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('contact-list', views.contactList, name='listContacts'),
    path('contact-detail/<str:pk>/', views.contactDetail, name='detailContact'),
    path('contact-create/', views.contactCreate, name='createContact'),
    path('contact-update/<str:pk>/', views.contactUpdate, name='updateContact'),
    path('contact-delete/<str:pk>/', views.contactDelete, name='deleteContact'),
]