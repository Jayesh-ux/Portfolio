# Generated by Django 5.0.1 on 2024-01-29 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='img',
            field=models.URLField(),
        ),
    ]
