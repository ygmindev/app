from __future__ import annotations

from datetime import datetime
from typing import List, Literal, Optional

from pydantic import BaseModel, ConfigDict, RootModel


class PartialPricingModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='allow',
    )


class PartialProductModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    field_id: Optional[str] = None
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    Pricing: Optional[List[PartialPricingModel]] = None
    description: Optional[str] = None
    imageSrc: Optional[List[str]] = None
    name: Optional[str] = None


class PricingModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    Product: PartialProductModel
    currency: Optional[str] = None
    frequency: Literal['recurring'] = 'recurring'
    price: Optional[float] = None
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[PricingModel]):
    root: PricingModel
