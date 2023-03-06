from fastapi import APIRouter,Query
from typing import Union
from pydantic import BaseModel

class Spacecraft(BaseModel):
    id:int
    name:str

router = APIRouter()

# union allows us to define what data types we can have

@router.get("/spacecrafts/{spacecreaft_id}")
async def get_spacecraft(spacecreaft_id:int, show_id:Union[str,None] = Query("Default",max_length=50)):
    return "space craft"

# the tags i used as title above the section 
@router.post("/spacecrafts",tags=["Spacecrafts"], response_model=Spacecraft)
async def post_spacecraft(spacecreaft:Spacecraft):
    return "heloooo"