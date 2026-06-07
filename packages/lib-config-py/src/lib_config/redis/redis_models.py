from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.field.field import Field


class RedisConfigModel(BaseModel):
    url: str = Field()
    max_pool: int = Field()
