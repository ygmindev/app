from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, RootModel


class UTILITYTYPE(Enum):
    AUTHENTICATION = 'authentication'
    DATABASE = 'database'
    FUNCTION = 'function'
    HOSTING = 'hosting'
    PAYMENT = 'payment'
    SMS = 'sms'
    SMTP = 'smtp'
    USAGE = 'usage'


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
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[UtilityModel]):
    root: UtilityModel
