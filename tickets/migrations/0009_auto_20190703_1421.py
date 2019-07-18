# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-07-03 14:21
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0008_bugreport_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='TicketPriorityLabel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label_name', models.CharField(max_length=20)),
            ],
        ),
        migrations.AlterField(
            model_name='bugreport',
            name='priority',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='tickets.TicketPriorityLabel'),
        ),
    ]