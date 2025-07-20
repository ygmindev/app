from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ..TestableEmbeddedResource import testable_embedded_resource
from ..TestableRelatedResource import testable_related_resource


class TestableEmbeddedResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
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
        extra='forbid',
    )


class Model(RootModel[TestableEntityResourceModel]):
    root: TestableEntityResourceModel


class TestableEntityResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
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
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class TestableRelatedResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    rootManyToMany: Optional[List[TestableEntityResourceModel]] = None
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


Model.model_rebuild()
TestableEntityResourceModel.model_rebuild()
TestableRelatedResourceModel.model_rebuild()
