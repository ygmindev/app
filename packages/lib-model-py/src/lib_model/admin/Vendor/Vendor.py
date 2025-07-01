from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ..Utility import Utility as Utility_1


class VendorModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Utility: Optional[List[Utility_1.UtilityModel]] = None
    imageSrc: Optional[str] = None
    name: str
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[VendorModel]):
    root: VendorModel
