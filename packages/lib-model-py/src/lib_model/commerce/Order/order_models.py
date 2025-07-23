from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, RootModel

from ..product_item import product_item


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
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[OrderModel]):
    root: OrderModel
