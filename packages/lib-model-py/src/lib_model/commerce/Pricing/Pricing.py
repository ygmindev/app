from __future__ import annotations

from datetime import datetime
from typing import List, Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class RefModelPricingModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='forbid',
    )


class RefModelProductModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    Pricing: Optional[List[RefModelPricingModel]] = None
    description: Optional[str] = None
    imageSrc: Optional[List[str]] = None
    name: Optional[str] = None


class PricingModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Product: RefModelProductModel
    currency: Optional[str] = None
    frequency: Literal['recurring'] = 'recurring'
    price: Optional[float] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[PricingModel]):
    root: PricingModel
