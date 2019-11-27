from django.db import models

UF_CHOICES = (
    ('AC', 'Acre'), 
    ('AL', 'Alagoas'),
    ('AP', 'Amapá'),
    ('BA', 'Bahia'),
    ('CE', 'Ceará'),
    ('DF', 'Distrito Federal'),
    ('ES', 'Espírito Santo'),
    ('GO', 'Goiás'),
    ('MA', 'Maranão'),
    ('MG', 'Minas Gerais'),
    ('MS', 'Mato Grosso do Sul'),
    ('MT', 'Mato Grosso'),
    ('PA', 'Pará'),
    ('PB', 'Paraíba'),
    ('PE', 'Pernanbuco'),
    ('PI', 'Piauí'),
    ('PR', 'Paraná'),
    ('RJ', 'Rio de Janeiro'),
    ('RN', 'Rio Grande do Norte'),
    ('RO', 'Rondônia'),
    ('RR', 'Roraima'),
    ('RS', 'Rio Grande do Sul'),
    ('SC', 'Santa Catarina'),
    ('SE', 'Sergipe'),
    ('SP', 'São Paulo'),
    ('TO', 'Tocantins')
)

class Cidade (models.Model):
    nome = models.CharField(max_length = 200)
    estado = models.CharField(max_length = 200, choices = UF_CHOICES )

    def __str__(self):
        return self.nome

class Endereco (models.Model):
    logradouro = models.CharField(max_length = 200)
    numero = models.IntegerField()
    cidade = models.ForeignKey(Cidade, on_delete=models.CASCADE)
    estado = models.CharField(max_length = 200, choices = UF_CHOICES )

    def __str__(self):
        return self.logradouro

class Escola (models.Model):
    nome = models.CharField(max_length = 200)
    endereco = models.ForeignKey(Endereco, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome

class Aluno (models.Model):
    SERIE_CHOICES = [
        ('1', 'primeiro ano'),
        ('2', 'segundo ano'),
        ('3', 'terceiro ano')
    ]

    nome = models.CharField(max_length = 200)
    nascimento = models.DateField()
    escola = models.ForeignKey(Escola, on_delete=models.CASCADE)
    serie = models.CharField(max_length = 30, choices=SERIE_CHOICES, default=1)
    email = models.EmailField(max_length = 200)
    senha = models.CharField(max_length = 30)
    endereco = models.ForeignKey(Endereco, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome
