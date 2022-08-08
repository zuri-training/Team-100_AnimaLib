# validates if the user_password matches our requirement.
import re

# The requirement include being atleast 8 character long and must have atleast one special character.
def validate(user_password) -> bool:
    special_characters = "'!@#$%^&*()-+?_=,<>/"
    if len(user_password)< 8 or not any(c in special_characters for c in user_password):
        return False
    return True

# validate if an email address is valid.
def isvalidEmail(email) -> bool:
    pattern = "^\S+@\S+\.\S+$"
    objs = re.search(pattern, email)
    try:
        if objs.string == email:
            return True
    except:
        return False

def check(get_image) -> bool:
    print(get_image.size)
    if get_image.size > 2 * 1024 * 1024:
        return False
    return True