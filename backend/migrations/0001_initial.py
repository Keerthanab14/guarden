# Generated by Django 3.2.4 on 2021-06-19 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plants',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('simple_name', models.CharField(max_length=200)),
                ('sif_name', models.CharField(max_length=200)),
                ('reg_sif_name', models.CharField(blank=True, max_length=500)),
                ('family_name', models.CharField(blank=True, max_length=200)),
                ('origin', models.CharField(blank=True, max_length=500)),
                ('pic1', models.FileField(upload_to='plant_gallery/')),
                ('pic2', models.FileField(upload_to='plant_gallery/')),
                ('pic3', models.FileField(upload_to='plant_gallery/')),
                ('pic4', models.FileField(upload_to='plant_gallery/')),
            ],
        ),
    ]
