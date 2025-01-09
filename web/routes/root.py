from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from starlette.responses import FileResponse
from web import app

@app.get("/", response_class=HTMLResponse)
async def root() -> HTMLResponse:
    return FileResponse("web/front/cafe.html")
