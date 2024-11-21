from web import app, database
from web.functions import get_next_id, hash
from fastapi import Request
from fastapi.responses import JSONResponse
from secrets import token_urlsafe

@app.get("/reg")
async def reg(login: int, password: str, repetition_password: str, request: Request) -> JSONResponse:
    user_exists = await database["users"].find_one({"login": login})
    print(f"Пользователь: {user_exists}")
    if user_exists:
        return JSONResponse({"status": False,"error": "Аккаунт с таким номером телефона уже зарегистрирован."}, status_code=422)
    
    if password != repetition_password:
        return JSONResponse({"status": False,"error": "Пароль не соответствует повторению."}, status_code=422)
    
    if len(password) < 8:
        return JSONResponse({"status": False,"error": "Пароль должен содержать не менее 8 символов."}, status_code=422)
    
    if not any(char.isdigit() for char in password):
        return JSONResponse({"status": False,"error": "В пароле отсутствуют цифры."}, status_code=422)
    token = token_urlsafe(128)
    try:
        await database["users"].insert_one({
            "_id": await get_next_id(collection=database["users"]),
            "login": login,
            "password": await(hash(password)),
            "session": token
        })
    except Exception as e:
       return JSONResponse({"status": False, "massage": e}, status_code=500)
    response = JSONResponse({"status": True,}, status_code=200)
    response.set_cookie(key="token", value=token)
    return response