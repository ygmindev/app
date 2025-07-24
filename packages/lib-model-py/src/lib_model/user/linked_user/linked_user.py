from __future__ import annotations

from datetime import datetime
from typing import Literal, Optional

from pydantic import BaseModel, ConfigDict, RootModel


class LinkedUserModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    externalId: str
    type: Literal['stripe']
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[LinkedUserModel]):
    root: LinkedUserModel
