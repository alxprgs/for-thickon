from fastapi.responses import HTMLResponse
from starlette.responses import FileResponse
from web import app

@app.get("/onas", response_class=HTMLResponse)
async def root() -> HTMLResponse:
    return FileResponse("web/front/onas.html")
