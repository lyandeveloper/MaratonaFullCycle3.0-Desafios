from django.urls import path

from app.views import maratona

urlpatterns = [
  path('maratona/', maratona)
]