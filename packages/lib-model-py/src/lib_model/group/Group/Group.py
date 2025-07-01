from __future__ import annotations

from datetime import datetime
from typing import Any, List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class GroupModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Access: Optional[Any] = None
    Role: Optional[Any] = None
    logo: Optional[str] = None
    name: str
    types: Optional[List[Any]] = None
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[GroupModel]):
    root: GroupModel
