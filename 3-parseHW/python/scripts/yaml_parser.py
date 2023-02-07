import yaml

with open("../../files/me.yaml", "r") as file:
    file_content = file.read()
    data = yaml.load(file_content, Loader=yaml.FullLoader)

print(data)