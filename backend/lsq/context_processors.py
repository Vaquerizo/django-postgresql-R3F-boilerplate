from django.conf import settings

def settings_context(request):
    """
    Add commonly used settings to the template context.
    """
    return {
        'ON_PRODUCTION': settings.ON_PRODUCTION,
        'DEBUG': settings.DEBUG,
    }