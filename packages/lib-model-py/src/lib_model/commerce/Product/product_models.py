from __future__ import annotations

from datetime import datetime
from typing import List, Literal, Optional

from pydantic import BaseModel, ConfigDict, RootModel


class RefModelProductModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='allow',
    )


class RefModelPricingModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    field_id: Optional[str] = None
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    Product: Optional[RefModelProductModel] = None
    currency: Optional[str] = None
    frequency: Literal['recurring'] = 'recurring'
    price: Optional[float] = None


class ProductModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    Pricing: Optional[List[RefModelPricingModel]] = None
    description: Optional[str] = None
    imageSrc: Optional[List[str]] = None
    name: str
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[ProductModel]):
    root: ProductModel
