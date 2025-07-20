from __future__ import annotations

from datetime import datetime
from typing import Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class LINKEDUSERTYPE(RootModel[Literal['stripe']]):
    root: Literal['stripe']


class LinkedUserModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    externalId: str
    type: LINKEDUSERTYPE
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[LinkedUserModel]):
    root: LinkedUserModel
