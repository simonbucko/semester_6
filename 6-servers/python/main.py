from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message":"hello"} # this is type of dict

@app.get("/newroute") # you can also not use the functionnames
def _():
    return {"message":"secound"}