from django.urls import path
from .views import StudentList
from .views import StudentDetail
from .views import Studentupdate

from .import views
urlpatterns = [
    path('student-list/', views.StudentList.as_view() ),
    path('student/<int:pk>/', views.StudentDetail.as_view() ),
    path('student/<int:pk>/', views.Studentupdate.as_view() ),
    
]