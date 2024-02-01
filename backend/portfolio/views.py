from rest_framework.response import Response
from rest_framework.decorators import api_view
from portfolio.models import Projects
from .api.serializers import ItemSerializer

@api_view(['GET'])
def getData(request):
    allproject= Projects.objects.all()
    serializer = ItemSerializer(allproject, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addItem(request):
    serializer = ItemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()    
    return Response(serializer.data)