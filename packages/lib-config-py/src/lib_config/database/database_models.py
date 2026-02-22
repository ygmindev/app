from typing import Any, Optional

from lib_shared.core.utils.base_model import BaseModel


class DatabaseConfigModel(BaseModel):
    database: Optional[str] = None
    resources: list[Any] = []
    host: Optional[str] = None
    password: Optional[str] = None
    username: Optional[str] = None
