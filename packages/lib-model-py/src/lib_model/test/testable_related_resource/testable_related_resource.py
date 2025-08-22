from __future__ import annotations

from datetime import datetime
from typing import Any, List, Optional

from pydantic import BaseModel, ConfigDict, RootModel

from ..testable_entity_resource import testable_entity_resource


class Model(RootModel[List[str]]):
    root: List[str]


class TestableRelatedResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    rootManyToMany: Optional[
        List[testable_entity_resource.TestableEntityResourceModel]
    ] = None
    rootManyToOne: Optional[Any] = None
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


TestableRelatedResourceModel.model_rebuild()
