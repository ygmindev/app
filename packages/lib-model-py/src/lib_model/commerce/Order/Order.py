from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ..ProductItem import ProductItem


class ORDERSTATUS(Enum):
    canceled = 'canceled'
    completed = 'completed'
    refunded = 'refunded'


class OrderModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    items: Optional[List[ProductItem.ProductItemModel]] = None
    paymentMethodId: Optional[str] = None
    status: Optional[ORDERSTATUS] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[OrderModel]):
    root: OrderModel
