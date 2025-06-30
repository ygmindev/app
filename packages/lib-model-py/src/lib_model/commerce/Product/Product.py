from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ..Pricing import Pricing as Pricing_1


class ProductModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Pricing: Optional[List[Pricing_1.PricingModel]] = None
    description: Optional[str] = None
    imageSrc: Optional[List[str]] = None
    name: str
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[ProductModel]):
    root: ProductModel
