from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


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
        extra='forbid',
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


class Model(RootModel[UtilityModel]):
    root: UtilityModel
