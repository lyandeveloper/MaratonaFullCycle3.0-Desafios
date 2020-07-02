from django.shortcuts import render

# Create your views here.
from app.models import Maratona

def maratona(request):
  aulas = Maratona.objects.all()
  return render(
    request,
    'aulas.html',
    {
      'aulas': aulas
    }
  )