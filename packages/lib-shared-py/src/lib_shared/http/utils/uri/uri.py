from lib_shared.core.utils.base_model.base_model import BaseModel


class Uri(BaseModel):
    host: str | None = None
    params: dict | None = None
    pathname: str | None = None
    port: str | int | None = None
