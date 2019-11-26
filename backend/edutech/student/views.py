from django.shortcuts import render
from rest_framework import generics
from .models import Music
from .serializers import MusicSerializer


class AlunoList(generics.ListCreateAPIView):

    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer

    