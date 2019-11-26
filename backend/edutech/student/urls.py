from django.urls import include, path
from rest_framework import routers

from .views import AlunoViewSet
from student import views

router = routers.DefaultRouter()
router.register('alunos', views.AlunoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

