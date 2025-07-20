from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ..utility import utility


class UTILITYTYPE(Enum):
    authentication = 'authentication'
    database = 'database'
    function = 'function'
    hosting = 'hosting'
    payment = 'payment'
    sms = 'sms'
    smtp = 'smtp'
    usage = 'usage'


class UtilityModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    description: Optional[str] = None
    imageSrc: Optional[str] = None
    name: str
    pricing: Optional[str] = None
    type: List[UTILITYTYPE]
    url: Optional[str] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class CollectionModelUtilityModel(RootModel[List[utility.UtilityModel]]):
    root: List[utility.UtilityModel]


class VendorModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    Utility: Optional[CollectionModelUtilityModel] = None
    imageSrc: Optional[str] = None
    name: str
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[VendorModel]):
    root: VendorModel
