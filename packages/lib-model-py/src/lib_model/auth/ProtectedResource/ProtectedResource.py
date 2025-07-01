from __future__ import annotations

from datetime import datetime
from typing import Any, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class ProtectedResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    createdBy: Optional[Any] = None
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[ProtectedResourceModel]):
    root: ProtectedResourceModel
