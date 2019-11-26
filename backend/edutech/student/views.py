
from rest_framework import filters
from rest_framework import viewsets
from rest_framework import generics

from .models import Aluno
from .serializers import AlunoSerializer


class AlunoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer


class AlunoListView(generics.ListAPIView):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['email', 'nome', 'escola', 'serie']

