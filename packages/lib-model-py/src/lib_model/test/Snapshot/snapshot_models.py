from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class SnapshotModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    images: Optional[List[str]] = None
    name: str
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[SnapshotModel]):
    root: SnapshotModel
