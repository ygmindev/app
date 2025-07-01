from __future__ import annotations

from datetime import datetime
from typing import Any, List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class ProductModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Pricing: Optional[Any] = None
    description: Optional[str] = None
    imageSrc: Optional[List[str]] = None
    name: str
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[ProductModel]):
    root: ProductModel
