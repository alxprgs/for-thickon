from web import app, database
from web.functions import hash
from fastapi.responses import JSONResponse
from fastapi import Request
from secrets import token_urlsafe

@app.get("/login")
async def login(login: int, password: str, request: Request) -> JSONResponse:
    if not login or not password:
        return JSONResponse({"status": False, "message": "Заполните все поля."}, status_code=400)
    try:
        user = await database["users"].find_one({"login": login})
    except Exception:
        return JSONResponse({"status": False, "message": "Ошибка сервера."}, status_code=500)
    if user:
        hashed_password = await hash(text=password)
        if hashed_password == user.get("password"):
            token = token_urlsafe(128)
            response = JSONResponse({"status": True}, status_code=200)
            response.set_cookie(key="token", value=token, httponly=True, secure=True)
            await database["users"].update_one({"_id": user["_id"]}, {"$set": {"session": token}})
            return response
        return JSONResponse({"status": False, "message": "Неверный пароль."}, status_code=401)
    return JSONResponse({"status": False, "message": "Пользователь не найден."}, status_code=404)
