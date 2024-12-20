from motor.motor_asyncio import AsyncIOMotorClient
from fastapi import FastAPI
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()

try:
    client = AsyncIOMotorClient(os.getenv("MONGO_URL"))
    database = client["prgtikhon"]
    print(f"Успешно подключение к базе данных")
except Exception as e:
    print(f"Ошибка подключения к базе данных: {str(e)}")
    raise e

from web.routes import reg, login, check_auth, logout
