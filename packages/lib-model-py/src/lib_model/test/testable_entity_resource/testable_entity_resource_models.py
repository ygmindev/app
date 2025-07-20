from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ..testable_embedded_resource import testable_embedded_resource
from ..testable_related_resource import testable_related_resource


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
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


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
    relatedManyToMany: Optional[CollectionModelTestableRelatedResourceModel] = None
    relatedOneToMany: Optional[CollectionModelTestableRelatedResourceModel] = None
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


class CollectionModelTestableRelatedResourceModel(
    RootModel[List[testable_related_resource.TestableRelatedResourceModel]]
):
    root: List[testable_related_resource.TestableRelatedResourceModel]


class TestableRelatedResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    rootManyToMany: Optional[CollectionModelTestableEntityResourceModel] = None
    rootOneToMany: Optional[RefModelTestableEntityResourceModel] = None
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


class CollectionModelTestableEntityResourceModel(
    RootModel[List[TestableEntityResourceModel]]
):
    root: List[TestableEntityResourceModel]


Model.model_rebuild()
TestableEntityResourceModel.model_rebuild()
TestableRelatedResourceModel.model_rebuild()
