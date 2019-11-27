from rest_framework import serializers
from .models import Aluno, Endereco, Cidade, Escola

class CidadeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cidade

        fields = (
            'nome',
            'estado',
        )

class EnderecoSerializer(serializers.ModelSerializer):
    cidade = CidadeSerializer(required=True)
    
    class Meta:
        model = Endereco

        fields = (
            'logradouro',
            'numero',
            'cidade' ,
            'estado'
        )


class EscolaSerializer(serializers.ModelSerializer):
    endereco = EnderecoSerializer(required=True)

    class Meta:
        model = Escola

        fields = (
            'nome',
            'endereco',
        )

class AlunoSerializer(serializers.ModelSerializer):

    endereco = EnderecoSerializer(required=True)
    escola = EscolaSerializer(required=True)

    class Meta:
        model = Aluno

        fields = (
            'nome',
            'nascimento',
            'escola',
            'serie',
            'email',
            'senha',
            'endereco'
        )