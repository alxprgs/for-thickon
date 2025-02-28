from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI

app = FastAPI()
app.mount("/static", StaticFiles(directory="web/front"), name="static")

from web.routes import root, onas, contact, review, menu
