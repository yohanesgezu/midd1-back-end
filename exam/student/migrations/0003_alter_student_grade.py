# Generated by Django 4.1.4 on 2022-12-24 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0002_student_delete_employe'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='grade',
            field=models.CharField(max_length=100),
        ),
    ]
