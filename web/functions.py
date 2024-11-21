from web import database
import hashlib

async def get_next_id(collection) -> int:
    last_document = await collection.find_one(sort=[("_id", -1)])
    return (last_document.get("_id", 0) + 1) if last_document else 0

async def hash(text: str) -> str:
    salt = str("8b2gE0r667hEojTnqut54vPpsN6svkFzRvJkIVmm2ouX3SnvApZ9UdMGeXKT5W9miaycfwWuSTOyUsJ4")
    salted_text = text + salt
    hashed_text = hashlib.sha256(salted_text.encode()).hexdigest()
    return hashed_text

async def check_auth_us(request) -> bool:
    token = request.cookies.get('token')
    if token:
        user = await database["users"].find_one({"session": token})
        return True if user else False
    return False 
