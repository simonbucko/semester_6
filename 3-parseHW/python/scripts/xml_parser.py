import xmltodict

with open("../../files/me.xml", "r") as file:
    xml_data = file.read()
    data = xmltodict.parse(xml_data)

print(data)