from django.db import models
from django_extensions.db.models import TimeStampedModel


class Country(TimeStampedModel):
    name = models.CharField(max_length=50)

    class Meta:
        verbose_name = "Country"
        verbose_name_plural = "Countries"

    def __str__(self):
        return self.name


class State(TimeStampedModel):
    name = models.CharField(max_length=100)
    country = models.ForeignKey(
        Country, on_delete=models.CASCADE, related_name="country"
    )

    class Meta:
        verbose_name = "State"
        verbose_name_plural = "States"

    def __str__(self):
        return self.name


class City(TimeStampedModel):
    name = models.CharField(max_length=100)
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name="state")

    class Meta:
        verbose_name = "City"
        verbose_name_plural = "Cities"

    def __str__(self):
        return self.name


class Bird(TimeStampedModel):
    name = models.CharField(max_length=120)
    location = models.ForeignKey(City, on_delete=models.PROTECT)
    species = models.CharField(max_length=120)
    author = models.ForeignKey(
        "users.User", on_delete=models.CASCADE, related_name="author"
    )
    image = models.ImageField()

    class Meta:
        verbose_name = "Bird"
        verbose_name_plural = "Birds"

    def __str__(self):
        return self.name
