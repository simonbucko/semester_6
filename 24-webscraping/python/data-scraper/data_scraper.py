import requests
from bs4 import BeautifulSoup

html = requests.get("https://en.wikipedia.org/wiki/List_of_Monty_Python_projects").text
parsed_html = BeautifulSoup(html, "lxml") #lxml is a perser type which has the most features

tags = parsed_html.find("div", {"class":"mw-parser-output"}) # get all div by class

projects = {}

for tag in tags:
    if tag.name == "h2":
        current_category = tag.text.replace("[edit]","")
        print("="*40)
        print(current_category)
        print("="*40)
    else:
