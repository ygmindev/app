from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ..testable_embedded_resource import testable_embedded_resource
from ..testable_entity_resource import testable_entity_resource


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


class Model(RootModel[TestableRelatedResourceModel]):
    root: TestableRelatedResourceModel


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
    RootModel[List[testable_entity_resource.TestableEntityResourceModel]]
):
    root: List[testable_entity_resource.TestableEntityResourceModel]


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
    RootModel[List[TestableRelatedResourceModel]]
):
    root: List[TestableRelatedResourceModel]


class RefModelTestableEntityResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    date: Optional[datetime] = None
    group: Optional[str] = None
    index: Optional[float] = None
    number: Optional[float] = None
    string: Optional[str] = None
    stringArray: Optional[List[str]] = None
    stringOptional: Optional[str] = None
    embedded: Optional[
        List[testable_embedded_resource.TestableEmbeddedResourceModel]
    ] = None
    relatedManyToMany: Optional[CollectionModelTestableRelatedResourceModel] = None
    relatedOneToMany: Optional[CollectionModelTestableRelatedResourceModel] = None


Model.model_rebuild()
TestableRelatedResourceModel.model_rebuild()
CollectionModelTestableEntityResourceModel.model_rebuild()
TestableEntityResourceModel.model_rebuild()
