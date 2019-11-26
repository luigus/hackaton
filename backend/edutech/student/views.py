
from rest_framework import viewsets

from .models import Aluno
from .serializers import AlunoSerializer

class AlunoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer
