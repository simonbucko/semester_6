import requests

url = "http://localhost:8000/api/parse-text"
text = "name=John\nage=30\naddress=123 Main St"

response = requests.post(url, json={"text": text})
print(response.json())