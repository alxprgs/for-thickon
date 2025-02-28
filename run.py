import uvicorn
from web import app 
import os

if __name__ == "__main__":
    try:
        uvicorn.run("web:app", port=int(os.getenv("PORT")), host="0.0.0.0")
    except Exception as e:
        print(f"error: {e}")