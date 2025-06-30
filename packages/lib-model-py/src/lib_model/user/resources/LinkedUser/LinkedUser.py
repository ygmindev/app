from __future__ import annotations

from datetime import datetime
from typing import Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class LinkedUserTypeModel(RootModel[Literal['stripe']]):
    root: Literal['stripe']


class LinkedUserModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    externalId: str
    type: LinkedUserTypeModel
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[LinkedUserModel]):
    root: LinkedUserModel
