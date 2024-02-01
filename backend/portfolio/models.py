from django.db import models

# Create your models here.


class Projects(models.Model):
    title= models.CharField(max_length=100)
    img= models.URLField(max_length=200)
    desc= models.TextField()
    url= models.URLField(max_length=200)
