from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

# Create your views here.

def index(request):
    return HttpResponse(request, "Hola desde genera3d")

@require_http_methods(["GET"])
def api_test(request):
    return JsonResponse({
        'status': 'success',
        'message': 'API funcionando',
        'data': {'version': '1.0'}
    })