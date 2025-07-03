from __future__ import annotations

from datetime import datetime
from typing import Any, List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ..TestableEntityResource import TestableEntityResource


class Model(RootModel[TestableRelatedResourceModel]):
    root: TestableRelatedResourceModel


class TestableRelatedResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    rootManyToMany: Optional[List[TestableEntityResource.TestableEntityResourceModel]] = None
    rootOneToMany: Optional[Any] = None
    date: Optional[datetime] = None
    group: str
    index: float
    number: Optional[float] = None
    string: str
    stringArray: Optional[List[str]] = None
    stringOptional: Optional[str] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


Model.model_rebuild()
TestableRelatedResourceModel.model_rebuild()
