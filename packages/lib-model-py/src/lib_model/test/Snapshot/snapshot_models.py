from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, RootModel


class SnapshotModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    images: Optional[List[str]] = None
    name: str
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[SnapshotModel]):
    root: SnapshotModel
