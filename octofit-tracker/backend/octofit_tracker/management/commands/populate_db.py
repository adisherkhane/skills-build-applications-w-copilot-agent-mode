from django.core.management.base import BaseCommand
from octofit_tracker.models import Team, User, Activity, Workout, Leaderboard
from django.utils import timezone
from datetime import date

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Clear all data
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        User.objects.all().delete()
        Team.objects.all().delete()
        Workout.objects.all().delete()

        # Create Teams
        marvel = Team.objects.create(name='Marvel', description='Marvel superheroes team')
        dc = Team.objects.create(name='DC', description='DC superheroes team')

        # Create Users
        users = [
            User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel),
            User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel),
            User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc),
            User.objects.create(name='Batman', email='batman@dc.com', team=dc),
        ]

        # Create Workouts
        workouts = [
            Workout.objects.create(name='Super Strength', description='Strength workout', suggested_for='Marvel'),
            Workout.objects.create(name='Stealth Training', description='Stealth and agility', suggested_for='DC'),
        ]

        # Create Activities
        Activity.objects.create(user=users[0], type='Web Swinging', duration=30, date=date.today())
        Activity.objects.create(user=users[1], type='Suit Training', duration=45, date=date.today())
        Activity.objects.create(user=users[2], type='Lasso Practice', duration=40, date=date.today())
        Activity.objects.create(user=users[3], type='Martial Arts', duration=50, date=date.today())

        # Create Leaderboard
        Leaderboard.objects.create(team=marvel, points=100)
        Leaderboard.objects.create(team=dc, points=90)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
