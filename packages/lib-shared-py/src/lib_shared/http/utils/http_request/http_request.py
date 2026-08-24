from lib_model.user.user.user import User

from lib_shared.core.utils.base_model.base_model import BaseModel


class HttpRequest(BaseModel):
    body: dict | bytes | None = None
    headers: dict | None = None
    user: User | None = None
