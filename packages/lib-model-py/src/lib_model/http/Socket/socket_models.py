from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class SocketModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    connections: List[str]
    name: Optional[str] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[SocketModel]):
    root: SocketModel
