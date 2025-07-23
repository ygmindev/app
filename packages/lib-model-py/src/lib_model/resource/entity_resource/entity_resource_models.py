from __future__ import annotations

from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, RootModel


class EntityResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[EntityResourceModel]):
    root: EntityResourceModel
