from __future__ import annotations

from datetime import datetime
from typing import List, Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class RefModelProductModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='allow',
    )


class PRICINGFREQUENCY(RootModel[Literal['recurring']]):
    root: Literal['recurring']


class RefModelPricingModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    Product: Optional[RefModelProductModel] = None
    currency: Optional[str] = None
    frequency: Optional[PRICINGFREQUENCY] = None
    price: Optional[float] = None


class ProductModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    Pricing: Optional[List[RefModelPricingModel]] = None
    description: Optional[str] = None
    imageSrc: Optional[List[str]] = None
    name: str
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[ProductModel]):
    root: ProductModel
