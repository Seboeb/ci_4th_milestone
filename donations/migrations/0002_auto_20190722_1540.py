# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-07-22 13:40
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('donations', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='donation',
            name='country',
        ),
        migrations.RemoveField(
            model_name='donation',
            name='phone_number',
        ),
        migrations.RemoveField(
            model_name='donation',
            name='postcode',
        ),
        migrations.RemoveField(
            model_name='donation',
            name='street_address1',
        ),
        migrations.RemoveField(
            model_name='donation',
            name='street_address2',
        ),
        migrations.RemoveField(
            model_name='donation',
            name='town_or_city',
        ),
    ]