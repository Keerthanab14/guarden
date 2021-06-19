from django.db import models

# Create your models here.
class Plants(models.Model):
    simple_name=models.CharField(max_length=200,default=' ')
    category=models.CharField(max_length=100,default=' ')
    sif_name=models.CharField(max_length=200,default=' ')
    family_name=models.CharField(blank=True ,max_length=200,default=' ')
    no_of_species=models.CharField(blank=True ,max_length=500,default=' ')
    medi_detail=models.CharField(blank=True ,max_length=500,default=' ')
    flower_feature=models.CharField(blank=True ,max_length=500,default=' ')
    life_cycle=models.CharField(blank=True ,max_length=500,default=' ')
    climet=models.CharField(blank=True ,max_length=500,default=' ')
    smell=models.CharField(blank=True ,max_length=500,default=' ')
    organic_manure=models.CharField(blank=True ,max_length=500,default=' ')
    flower_details=models.CharField(blank=True ,max_length=500,default=' ')
    how_to_plant=models.CharField(blank=True ,max_length=500,default=' ')
    how_to_glow=models.CharField(blank=True ,max_length=500,default=' ')
    how_to_care=models.CharField(blank=True ,max_length=500,default=' ')
    pic1= models.FileField(upload_to='plant_gallery/',default=' ')
    pic2= models.FileField(upload_to='plant_gallery/',default=' ')
    pic3= models.FileField(upload_to='plant_gallery/',default=' ')
    pic4= models.FileField(upload_to='plant_gallery/',default=' ')
    def __self__(self):
        return self.simple_name

    
