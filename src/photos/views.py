from django.shortcuts import render
from photos.models import Bird


def home_page(request):
    birds_queryset = Bird.objects.all()
    context = {"object_list": birds_queryset}
    return render(request, "index.html", context)
