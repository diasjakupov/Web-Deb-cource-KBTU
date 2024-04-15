from rest_framework import serializers
from .models import *

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    city = serializers.CharField(max_length=255)
    address = serializers.CharField()


class VacancySeriliazer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ("__all__")