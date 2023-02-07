import json

with open("../../files/me.json", "r") as file:
    file_content = file.read()
    data = json.loads(file_content)

print(data)