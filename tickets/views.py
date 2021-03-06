from django.shortcuts import render, get_object_or_404, redirect, reverse
from django.utils import timezone
from .models import Ticket, Comment
from donations.models import Donation
from .forms import CommentForm, TicketForm
from .utils import create_search_label
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import HttpResponseRedirect, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.db.models import Sum
import json


def ticket_view(request, id):
    """
    Create a bug report ticket page
    view with details of that ticket
    """
    ticket = get_object_or_404(Ticket, pk=id)
    comments = Comment.objects.filter(ticket=id)

    if request.user.is_authenticated:
        actions = {
            'upvoted': True if request.user.upvotes.all().filter(pk=id) else False,
            'watchlist': True if request.user.watchlist.all().filter(pk=id) else False,
            'owner': True if ticket.user == request.user else False
        }
    else:
        actions = None

    year_range = range(2019, 2039)

    # Calculate domation percentage of ticket
    if ticket.ticket_type.name == 'bug_report':
        target_perc = 1
    elif ticket.ticket_type.name == 'feature_request':
        if ticket.target_amount <= 0:
            target_perc = 0
        else:
            target_perc = ticket.donated_amount / ticket.target_amount
            if target_perc >= 1:
                target_perc = 1

    donate_info = {
        'circle_offset': round(276 * target_perc),
        'complete': True if target_perc >= 1 and ticket.ticket_type.name == 'feature_request' else False
    }

    return render(request, 'ticket_view.html', {'ticket': ticket, 'comments': comments, 'actions': actions,
                                                'year_range': year_range, 'publishable': settings.STRIPE_PUBLISHABLE, 'donate_info': donate_info})


@login_required
def post_comment(request):
    """
    Posts a comment for a given ticket view
    """
    if request.method == "POST":

        form = CommentForm(request.POST)

        if form.is_valid():
            # Create comment
            comment = form.save(commit=False)
            comment.user = request.user
            ticket = get_object_or_404(Ticket, pk=request.POST["ticket_id"])
            comment.ticket = ticket
            comment.save()

            # Update ticket
            ticket.nr_comments = ticket.nr_comments + 1
            ticket.save()
        else:
            messages.error(request, "Something went wrong. Please try again.")

        return redirect(ticket_view, request.POST["ticket_id"])


@login_required
def post_bug_report(request):
    """
    Posts a new bug report
    """

    if request.method == "POST":

        # Create new ticket
        form = TicketForm(request.POST)

        if form.is_valid():
            ticket = form.save(commit=False)
            ticket.user = request.user
            ticket.ticket_type_id = 1

            # Set app type
            if request.POST['app_type'] == 'finder_app':
                ticket.finder_app = True
                ticket.recipe_community = False
            elif request.POST['app_type'] == 'recipe_community':
                ticket.finder_app = False
                ticket.recipe_community = True

            # Create ticket id
            number = Ticket.objects.filter(ticket_type=1).count()
            ticket.ticket_id = "B-" + str(number + 1)

            # Create search text
            ticket.search_field = create_search_label(ticket)

            ticket.save()
            request.user.created_tickets.add(ticket)
            messages.success(request, "Your bug report has been created!")
        else:
            messages.error(request, "Your bug report was not created")

    return HttpResponseRedirect(request.META.get('HTTP_REFERER', reverse('dev_panel')))


@login_required
def post_feature_request(request):
    """
    Posts a new feature request
    """

    if request.method == "POST":

        # Create new ticket
        form = TicketForm(request.POST)

        if form.is_valid():
            ticket = form.save(commit=False)
            ticket.user = request.user
            ticket.ticket_type_id = 2
            ticket.target_amount = 150.00

            # Set app type
            if request.POST['app_type'] == 'finder_app':
                ticket.finder_app = True
                ticket.recipe_community = False
            elif request.POST['app_type'] == 'recipe_community':
                ticket.finder_app = False
                ticket.recipe_community = True

            # Create ticket id
            number = Ticket.objects.filter(ticket_type=2).count()
            ticket.ticket_id = "F-" + str(number + 1)

            # Create search text
            ticket.search_field = create_search_label(ticket)

            ticket.save()
            request.user.created_tickets.add(ticket)
            messages.success(request, "Your feature request has been created!")
        else:
            messages.error(request, "Your feature request was not created")

    return HttpResponseRedirect(request.META.get('HTTP_REFERER', reverse('dev_panel')))


@login_required
def edit_ticket(request):
    """
    Updates the ticket
    """
    if request.method == 'POST':
        # Create new ticket
        form = TicketForm(request.POST)

        if form.is_valid():
            ticket = get_object_or_404(Ticket, pk=request.POST['ticket_id'])
            ticket.title = request.POST['title']
            ticket.description = request.POST['description']
            ticket.search_field = create_search_label(ticket)
            ticket.save()
            messages.success(request, "Ticket was successfully updated!")
        else:
            messages.error(request, "Oops... Something went wrong")

    return HttpResponseRedirect(request.META.get('HTTP_REFERER', reverse('dev_panel')))


@login_required
@csrf_exempt
def post_upvote(request, id):
    """
    Update the upvote from a user for a specific
    ticket
    """
    if request.method == 'POST':
        ticket = get_object_or_404(Ticket, pk=id)
        ticket_in_list = request.user.upvotes.all().filter(pk=id)

        if ticket_in_list:
            request.user.upvotes.remove(ticket)
            ticket.upvotes = ticket.upvotes - 1
            state = 'off'
        else:
            request.user.upvotes.add(ticket)
            ticket.upvotes = ticket.upvotes + 1
            state = 'on'

        ticket.save()

        return HttpResponse(json.dumps({'status': 'ok', 'state': state, 'upvotes': ticket.upvotes}), content_type='application/json')


@login_required
@csrf_exempt
def post_watchlist(request, id):
    """
    Sets or unsets a ticket from the watchlist
    of a user
    """

    if request.method == 'POST':
        ticket = get_object_or_404(Ticket, pk=id)
        ticket_in_list = request.user.watchlist.all().filter(pk=id)

        if ticket_in_list:
            request.user.watchlist.remove(ticket)
            state = 'off'
        else:
            request.user.watchlist.add(ticket)
            state = 'on'

        return HttpResponse(json.dumps({'status': 'ok', 'state': state}), content_type='application/json')


@login_required
def reporting(request):
    """
    Opens the reporting of the tickets
    and donations created by the user
    """

    user = request.user

    # Get bug report data
    bug_report_data = {
        'bug_reports': Ticket.objects.filter(ticket_type=1, user=user),
        'nr_open': Ticket.objects.filter(ticket_type=1, user=user, status=1).count(),
        'nr_progress': Ticket.objects.filter(ticket_type=1, user=user, status=2).count(),
        'nr_done': Ticket.objects.filter(ticket_type=1, user=user, status=3).count(),
        'nr_open_g': Ticket.objects.filter(ticket_type=1, status=1).count(),
        'nr_progress_g': Ticket.objects.filter(ticket_type=1, status=2).count(),
        'nr_done_g': Ticket.objects.filter(ticket_type=1, status=3).count()
    }

    # Get feature request data
    feature_request_data = {
        'bug_reports': Ticket.objects.filter(ticket_type=2, user=user),
        'nr_open': Ticket.objects.filter(ticket_type=2, user=user, status=1).count(),
        'nr_progress': Ticket.objects.filter(ticket_type=2, user=user, status=2).count(),
        'nr_done': Ticket.objects.filter(ticket_type=2, user=user, status=3).count(),
        'nr_open_g': Ticket.objects.filter(ticket_type=2, status=1).count(),
        'nr_progress_g': Ticket.objects.filter(ticket_type=2, status=2).count(),
        'nr_done_g': Ticket.objects.filter(ticket_type=2, status=3).count()
    }

    # Get donation data
    donation_data = {
        'donations': Donation.objects.filter(user=user),
        'total': Donation.objects.filter(user=user).aggregate(Sum('amount')),
        'total_g': Donation.objects.filter().aggregate(Sum('amount'))
    }
    return render(request, 'reporting.html', {'bug_report_data': bug_report_data, 'feature_request_data': feature_request_data, 'donation_data': donation_data})
