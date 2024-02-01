from rest_framework import serializers
from portfolio.models  import Projects


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ['id','title', 'img', 'desc', 'url']