from __future__ import annotations

from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class EntityResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[EntityResourceModel]):
    root: EntityResourceModel
