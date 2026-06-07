from typing import Any

from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.field.field import Field


class DatabaseConfigModel(BaseModel):
    database: str = Field()
    resources: list[Any] = []
    host: str = Field()
    password: str = Field()
    username: str = Field()
    max_pool: int = Field()
    min_pool: int = Field()
    timeout: int = Field()
