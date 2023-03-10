from fastapi import FastAPI, Request
from typing import Dict
import csv
import io
import requests

app = FastAPI()
NODE_SERVER_URL="http://127.0.0.1:3000"

@app.post("/api/csv")
async def parse_csv(request: Request) -> Dict:
    try:
        text = await request.body()
        text = text.decode("utf-8")
        csv_data = io.StringIO(text)
        reader = csv.DictReader(csv_data)
        rows = [row for row in reader]
        return {"data": rows}
    except csv.Error as e:
        raise HTTPException(status_code=400, detail="Invalid CSV") from e
    
@app.post("/api/text")
async def parse_csv(request: Request) -> Dict:
    try:
        text = await request.body()
        text = text.decode("utf-8")
        csv_data = io.StringIO(text)
        reader = csv.DictReader(csv_data, delimiter='=')
        rows = [row for row in reader]
        return {"data": rows}
    except csv.Error as e:
        raise HTTPException(status_code=400, detail="Invalid CSV") from e
    
@app.post("/api/json")
async def parse_json(request: Request) -> Dict:
    try:
        body = await request.body();
        response = requests.post(f"{NODE_SERVER_URL}/api/json", data=body, headers={'Content-Type': 'application/json'})

        return response.json()
    except csv.Error as e:
        raise HTTPException(status_code=400, detail="Invalid CSV") from e
    
@app.post("/api/yaml")
async def parse_json(request: Request) -> Dict:
    try:
        body = await request.body();
        response = requests.post(f"{NODE_SERVER_URL}/api/yaml", data=body, headers={'Content-Type': 'application/x-yaml'})

        return response.json()
    except csv.Error as e:
        raise HTTPException(status_code=400, detail="Invalid CSV") from e
    
@app.post("/api/xml")
async def parse_json(request: Request) -> Dict:
    try:
        body = await request.body();
        response = requests.post(f"{NODE_SERVER_URL}/api/xml", data=body, headers={'Content-Type': 'application/xml'})

        return response.json()
    except csv.Error as e:
        raise HTTPException(status_code=400, detail="Invalid CSV") from e
    



