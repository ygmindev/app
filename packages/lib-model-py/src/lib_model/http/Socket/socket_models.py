from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, RootModel


class SocketModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    connections: List[str]
    name: Optional[str] = None
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[SocketModel]):
    root: SocketModel
