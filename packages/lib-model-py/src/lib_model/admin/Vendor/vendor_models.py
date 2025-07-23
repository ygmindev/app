from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, RootModel

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


class VendorModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    Utility: Optional[List[utility.UtilityModel]] = None
    imageSrc: Optional[str] = None
    name: str
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[VendorModel]):
    root: VendorModel
