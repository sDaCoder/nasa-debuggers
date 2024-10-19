from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Hello World"}

items = []
@app.post("/post/")
def post(data: int | str):
    items.append(data)
    return {
        "message": "Item is added",
        "data": items,
        "request": "request"
    }

class Location(BaseModel):
    state: str
    district: str

@app.post("/get")
async def get(request: Request):
    try:    
        req = await request.json()
        print(req)
        return {
            "message": "Item searched",
            "data": req
        }
    except Exception as e:
        print(e)

@app.get("/hello/{name}")
def say_hello(name: str | int | None = "World"):
    return {"message": f"Hello {name}"}

