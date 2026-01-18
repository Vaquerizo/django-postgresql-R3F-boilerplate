"""
archivo urls.py para app genera3d
author: Daniel Vaquerido-Hdez
date: 17_01_2026
"""

from django.urls import path 
from genera3d.views import *

urlpatterns = [ 
    path('', index, name='index'), 
    path('api/test/', api_test, name='api_test'),
]