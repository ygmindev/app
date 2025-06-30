from __future__ import annotations

from datetime import datetime
from typing import Any, Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class PricingModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Product: Optional[Any] = None
    currency: Optional[str] = None
    frequency: Literal['recurring'] = 'recurring'
    price: Optional[float] = None
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[PricingModel]):
    root: PricingModel
