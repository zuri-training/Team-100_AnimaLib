from django.contrib.auth.tokens import PasswordResetTokenGenerator
from six import text_type 

class ResetTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (
            text_type(user.pk) + text_type(timestamp) +
            text_type(user.email)
        )
        
email_reset_generator = ResetTokenGenerator()