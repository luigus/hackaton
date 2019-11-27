from django.contrib import admin
from    .models import Aluno, Endereco, Cidade, Escola

admin.site.register(Aluno)
admin.site.register(Endereco)
admin.site.register(Cidade)
admin.site.register(Escola)