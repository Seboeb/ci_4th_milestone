# from .models import User


# class EmailAuth:
#     """ Authenticate a user by providing an email and password """

#     def authenticate(self, email=None, password=None):
#         """ Get an instance of `User` based off the email and check the password """

#         try:
#             print(email)
#             user = User.objects.get(email=email)

#             if user.check_password(password):
#                 return user
#             return None
#         except User.DoesNotExist:
#             return None

#     def get_user(self, user_id):
#         """ Used by django authentication system to retrieve a user instance """

#         try:
#             user = User.objects.get(pk=user_id)

#             if user.is_active:
#                 return user
#             return None
#         except User.DoesNotExist:
#             return None
