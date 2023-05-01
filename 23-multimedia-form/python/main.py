from fastapi import FastAPI, Form, File, UploadFile

app = FastAPI()

@app.post("/form")
def form_handler(username:str = Form(...), password:str = Form(default=...,min_length=8)):
        return {"username": username}

# parameter "file" must be the same as name in frontend
# @app.post("fileform")
# def fiel_form_handler(file:bytes = File(...)):
#     with open("file.txt", "wb") as f:
#         f.write(file)
#         f.close()

#     return {"message": "file uploaded"}

@app.post("fileform")
async def fiel_form_handler(file:UploadFile = File(...)):
    contents = await file.read()
    
    return {"filename": file.filename}