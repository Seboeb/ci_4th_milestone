# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-07-03 13:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0005_auto_20190703_0543'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bugreport',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
