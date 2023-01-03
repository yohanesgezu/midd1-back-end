from django.db import models

# Create your models here.
class student(models.Model):
  firstname = models.CharField(max_length=200)
  lastname = models.CharField(max_length=100)
  grade = models.CharField(max_length=100)
      
  def __str__(self):
    return self.name