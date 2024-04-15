from django.http import JsonResponse
from django.http import Http404
from django.shortcuts import get_object_or_404
from api.models import Company, Vacancy
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.response import Response
from .serializers import VacancySeriliazer, CompanySerializer


class CompanyListView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


@api_view(["GET"])
def company_detail(request, id):
    try:
        company = get_object_or_404(Company, id=id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    except Http404:
        return Response([])
    
@api_view(["GET"])
def company_vacancies(request, id):
    try:
        company = get_object_or_404(Company, id=id)
        vacancies = company.vacancies.all()
        serializer = VacancySeriliazer(vacancies, many=True)
        return Response(serializer.data)
    except Http404:
        return Response({})


class VanacyListView(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySeriliazer

class VanacyDetailView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySeriliazer
    lookup_field = "id"

@api_view(["GET"])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySeriliazer(vacancies, many = True)
    return Response(serializer.data)
