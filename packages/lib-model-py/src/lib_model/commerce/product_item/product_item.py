from __future__ import annotations

from typing import Optional

from pydantic import BaseModel, ConfigDict, RootModel


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


class Model(RootModel[ProductItemModel]):
    root: ProductItemModel
