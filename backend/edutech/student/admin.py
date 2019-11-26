from django.contrib import admin
from    .models import Aluno, Endereco, Cidade, Estado, Escola

admin.site.register(Aluno)
admin.site.register(Endereco)
admin.site.register(Cidade)
admin.site.register(Estado)
admin.site.register(Escola)