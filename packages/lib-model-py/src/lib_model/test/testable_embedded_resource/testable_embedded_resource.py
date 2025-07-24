from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, RootModel


class TestableEmbeddedResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    date: Optional[datetime] = None
    group: str
    index: float
    number: Optional[float] = None
    string: str
    stringArray: Optional[List[str]] = None
    stringOptional: Optional[str] = None
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[TestableEmbeddedResourceModel]):
    root: TestableEmbeddedResourceModel
