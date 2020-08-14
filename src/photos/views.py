from django.shortcuts import render
from photos.models import Photo


def home_page(request):
    photos_queryset = Photo.objects.all()
    context = {"object_list": photos_queryset}
    return render(request, "index.html", context)
