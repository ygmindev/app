from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, RootModel

from ..testable_embedded_resource import testable_embedded_resource
from ..testable_related_resource import testable_related_resource


class RefModelTestableEntityResourceModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='allow',
    )


class Model(RootModel[TestableEntityResourceModel]):
    root: TestableEntityResourceModel


class TestableEntityResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    embedded: Optional[
        List[testable_embedded_resource.TestableEmbeddedResourceModel]
    ] = None
    relatedManyToMany: Optional[
        List[testable_related_resource.TestableRelatedResourceModel]
    ] = None
    relatedOneToMany: Optional[
        List[testable_related_resource.TestableRelatedResourceModel]
    ] = None
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


class CollectionModelTestableEntityResourceModel(
    RootModel[List[TestableEntityResourceModel]]
):
    root: List[TestableEntityResourceModel]


Model.model_rebuild()
TestableEntityResourceModel.model_rebuild()
