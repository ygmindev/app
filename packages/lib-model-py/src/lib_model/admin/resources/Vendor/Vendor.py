from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ..Utility import Utility


class CollectionModelUtilityModel(RootModel[List[Utility.UtilityModel]]):
    root: List[Utility.UtilityModel]


class VendorModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    imageSrc: Optional[str] = None
    name: str
    utilities: Optional[CollectionModelUtilityModel] = None
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[VendorModel]):
    root: VendorModel
