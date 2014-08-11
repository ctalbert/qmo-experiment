This is an experiment with a mezzanine powered qmo
To get set up (and I'm not entirely vouching for these instructions yet):
- mkvirutalenv qmo // create a virtualenv
- pip install -r requirements.txt
- python manage.py syncdb
- python manage.py runserver
And you should have something running at 127.0.0.1:8000. Log in at 127.0.0.1:8000/admin

The log in is still admin/default. It's in NO WAY ANYWHERE NEAR shipping. Like I said, total experiment.
