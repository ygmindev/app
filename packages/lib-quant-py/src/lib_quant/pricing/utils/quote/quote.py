from datetime import datetime
from typing import Generic, TypeVar

from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_quant.asset.asset.asset import Asset
from lib_quant.pricing.utils.quote.constants import QuoteType

TType = TypeVar("TType", bound=Asset)


class Quote(BaseModel, Generic[TType]):
    value: float
    timestamp: datetime
    asset: TType | None = None
    quote_type: QuoteType | None = QuoteType.PRICE
