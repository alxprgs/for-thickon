from web import app
from web.functions import check_auth_us
from fastapi import Request

@app.get("/check_auth")
async def check_auth(request: Request) -> bool:
    return await check_auth_us(request=request)
