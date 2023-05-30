from dotenv import load_dotenv, dotenv_values
import os

variable_value = os.environ.get('HELLO')
print(variable_value)

dotenv_values = dotenv_values()
print(dotenv_values.get("MY_SECRET"))