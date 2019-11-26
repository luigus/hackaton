from django.db import models

class Estado (models.Model):
    nome = models.CharField(max_length = 200)

    def __str__(self):
        return self.nome

class Cidade (models.Model):
    nome = models.CharField(max_length = 200)
    estado = models.ForeignKey(Estado, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome

class Endereco (models.Model):
    logradouro = models.CharField(max_length = 200)
    numero = models.IntegerField()
    cidade = models.ForeignKey(Cidade, on_delete=models.CASCADE)
    estado = models.ForeignKey(Estado, on_delete=models.CASCADE)

    def __str__(self):
        return self.logradouro

class Escola (models.Model):
    nome = models.CharField(max_length = 200)
    endereco = models.ForeignKey(Endereco, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome

class Aluno (models.Model):
    series = [
        ('1', 'primeiro ano'),
        ('2', 'segundo ano'),
        ('3', 'terceiro ano')
    ]

    nome = models.CharField(max_length = 200)
    nascimento = models.DateField()
    escola = models.ForeignKey(Escola, on_delete=models.CASCADE)
    serie = models.CharField(max_length = 30, choices=series, default=1)
    email = models.EmailField(max_length = 200)
    senha = models.CharField(max_length = 30)
    endereco = models.ForeignKey(Endereco, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome
