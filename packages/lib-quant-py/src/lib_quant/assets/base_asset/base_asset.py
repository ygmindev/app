from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field


class BaseAsset(BaseModel):
    name: str
    value: float = Field(default=0.0)
