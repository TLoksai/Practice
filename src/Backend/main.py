from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174/"],  # Update with your React URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data model
class Item(BaseModel):
    name: str
    description: str
    price: float

# Test API
@app.get("/")
async def read_root():
    return {"message": "Welcome to FastAPI"}

# Create item endpoint
@app.post("/items/")
async def create_item(item: Item):
    return {"message": "Item received", "item": item}
