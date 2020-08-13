from django.urls import path
from .views import home_page

app_name = "photos"

urlpatterns = [path("", home_page, name="home-page")]
