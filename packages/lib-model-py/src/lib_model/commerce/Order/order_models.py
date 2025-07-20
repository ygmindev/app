from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ..product_item import product_item


class ProductItemModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    imageSrc: Optional[str] = None
    name: str
    price: Optional[float] = None
    pricingId: str
    productId: str
    quantity: Optional[float] = None


class ORDERSTATUS(Enum):
    canceled = 'canceled'
    completed = 'completed'
    refunded = 'refunded'


class OrderModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    items: Optional[List[product_item.ProductItemModel]] = None
    paymentMethodId: Optional[str] = None
    status: Optional[ORDERSTATUS] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[OrderModel]):
    root: OrderModel
