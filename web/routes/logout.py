from web import app
from fastapi import Request
from fastapi.responses import JSONResponse

@app.get("/logout")
async def logout(request: Request) -> JSONResponse:
    response = JSONResponse({"status": True}, status_code=200)
    response.delete_cookie(key="token")
    return response
