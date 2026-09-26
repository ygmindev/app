from datetime import datetime
from typing import Generic, TypeVar

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.instrument.models.base_instrument.base_instrument import BaseInstrument

TType = TypeVar("TType", bound=BaseInstrument)


class Quote(BaseModel, Generic[TType]):
    value: float
    timestamp: datetime = Field(default_factory=datetime.now)
    asset: TType | None = Field(default=None)
