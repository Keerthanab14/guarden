from django.shortcuts import render
from django.http import HttpResponse
from django.db.models.functions import JSONObject
from .models import *
from .forms import *

# Create your views here.
def index(request):
    qury=searchqury()
    return render(request, 'home.html',{'form':qury})

def plantresult(request):
    if request.method=='GET':
        qury=request.GET.get('search')
    else:
        pass
    sample=str(qury)
    sample=sample.lower()
    simple_name=''
    category=''
    sif_name=''
    family_name=''
    no_of_species=''
    medi_detail=''
    flower_feature=''
    life_cycle=''
    climet=''
    smell=''
    organic_manure=''
    flower_details=''
    how_to_plant=''
    how_to_glow=''
    how_to_care=''
    pic1=''
    pic2=''
    pic3=''
    pic4=''
    totall=list(Plants.objects.values())
    found=False
    max=int(len(totall)-1)
    min=0
    while min <= max:
        itm=dict(totall[min])
        name=str(itm.get('simple_name'))
        name=name.lower()
        if name==sample:
            found=True
            simple_name=itm.get('simple_name')
            category=itm.get('category')
            sif_name=itm.get('sif_name')
            family_name=itm.get('family_name')
            no_of_species=itm.get('no_of_species')
            medi_detail=itm.get('medi_detail')
            flower_feature=itm.get('flower_feature')
            life_cycle=itm.get('life_cycle')
            climet=itm.get('climet')
            smell=itm.get('smell')
            organic_manure=itm.get('organic_manure')
            flower_details=itm.get('flower_details')
            how_to_plant=itm.get('how_to_plant')
            how_to_glow=itm.get('how_to_glow')
            how_to_care=itm.get('how_to_care')
            pic1=itm.get('pic1')
            pic2=itm.get('pic2')
            pic3=itm.get('pic3')
            pic4=itm.get('pic4')
        else:
            pass
        min=min+1
    if found==True:
        return render(request, 'plantresult.html',{'simple_name':simple_name,'sif_name':sif_name,'category':category,'family_name':family_name,'no_of_species':no_of_species,'medi_detail':medi_detail,'flower_feature':flower_feature,'life_cycle':life_cycle,'climet':climet,'smell':smell,'organic_manure':organic_manure,'flower_details':flower_details,'how_to_plant':how_to_plant,'how_to_glow':how_to_glow,'how_to_care':how_to_care,'pic1':pic1,'pic2':pic2,'pic3':pic3,'pic4':pic4})
    else:
        return HttpResponse('Plant is not added to database')