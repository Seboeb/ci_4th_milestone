# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-07-02 16:16
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tickets', '0003_auto_20190702_1800'),
    ]

    operations = [
        migrations.AddField(
            model_name='bugreport',
            name='nr_comments',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='bugreport',
            name='priority',
            field=models.CharField(default='low', max_length=10),
        ),
        migrations.AddField(
            model_name='bugreport',
            name='ticket_id',
            field=models.CharField(default='', max_length=10),
        ),
        migrations.AddField(
            model_name='bugreport',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
