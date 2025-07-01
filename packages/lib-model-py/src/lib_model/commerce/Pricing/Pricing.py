from __future__ import annotations

from datetime import datetime
from typing import List, Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class Model(RootModel[PricingModel]):
    root: PricingModel


class Product(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    beforeCreate: None = None
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    Pricing: Optional[List[PricingModel]] = None
    description: Optional[str] = None
    imageSrc: Optional[List[str]] = None
    name: Optional[str] = None


class PricingModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Product_1: Optional[Product] = Field(None, alias='Product')
    currency: Optional[str] = None
    frequency: Literal['recurring'] = 'recurring'
    price: Optional[float] = None
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


Model.model_rebuild()
Product.model_rebuild()
