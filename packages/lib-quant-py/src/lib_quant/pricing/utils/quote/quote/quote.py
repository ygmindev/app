from datetime import datetime
from typing import Generic, TypeVar

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.core.asset.asset import Asset

TType = TypeVar("TType", bound=Asset)


class Quote(BaseModel, Generic[TType]):
    value: float
    timestamp: datetime = Field(default_factory=datetime.now)
    asset: TType | None = Field(default=None)
