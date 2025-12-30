"""octofit_tracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

import os
from django.contrib import admin
from django.urls import path
from django.http import JsonResponse

def api_root(request):
    codespace_name = os.environ.get('CODESPACE_NAME', 'localhost')
    api_url = f"https://{codespace_name}-8000.app.github.dev/api/"
    return JsonResponse({"api_root": api_url})


def activities_endpoint(request):
    codespace_name = os.environ.get('CODESPACE_NAME', 'localhost')
    url = f"https://{codespace_name}-8000.app.github.dev/api/activities/"
    return JsonResponse({"activities_url": url})

def leaderboard_endpoint(request):
    codespace_name = os.environ.get('CODESPACE_NAME', 'localhost')
    url = f"https://{codespace_name}-8000.app.github.dev/api/leaderboard/"
    return JsonResponse({"leaderboard_url": url})

def teams_endpoint(request):
    codespace_name = os.environ.get('CODESPACE_NAME', 'localhost')
    url = f"https://{codespace_name}-8000.app.github.dev/api/teams/"
    return JsonResponse({"teams_url": url})

def users_endpoint(request):
    codespace_name = os.environ.get('CODESPACE_NAME', 'localhost')
    url = f"https://{codespace_name}-8000.app.github.dev/api/users/"
    return JsonResponse({"users_url": url})

def workouts_endpoint(request):
    codespace_name = os.environ.get('CODESPACE_NAME', 'localhost')
    url = f"https://{codespace_name}-8000.app.github.dev/api/workouts/"
    return JsonResponse({"workouts_url": url})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api_root),
    path('api/activities/', activities_endpoint),
    path('api/leaderboard/', leaderboard_endpoint),
    path('api/teams/', teams_endpoint),
    path('api/users/', users_endpoint),
    path('api/workouts/', workouts_endpoint),
]
