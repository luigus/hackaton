# Generated by Django 2.2.7 on 2019-11-26 18:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0002_aluno_escola'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aluno',
            name='serie',
            field=models.CharField(choices=[('1', 'primeiro ano'), ('2', 'segundo ano'), ('3', 'terceiro ano')], default=1, max_length=30),
        ),
    ]