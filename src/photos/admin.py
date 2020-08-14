from django.contrib import admin
from photos.models import Country, State, City, Bird


@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    pass


@admin.register(State)
class StateAdmin(admin.ModelAdmin):
    pass


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    pass


@admin.register(Bird)
class PhotoAdmin(admin.ModelAdmin):
    pass
