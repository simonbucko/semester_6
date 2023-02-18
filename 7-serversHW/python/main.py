from fastapi import FastAPI, Request
from typing import Dict
import csv
import io

app = FastAPI()

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


