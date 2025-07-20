from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ..TestableEmbeddedResource import TestableEmbeddedResource
from ..TestableEntityResource import TestableEntityResource


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


class Model(RootModel[TestableRelatedResourceModel]):
    root: TestableRelatedResourceModel


class TestableRelatedResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    rootManyToMany: Optional[
        List[TestableEntityResource.TestableEntityResourceModel]
    ] = None
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


class TestableEntityResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    embedded: Optional[List[TestableEmbeddedResource.TestableEmbeddedResourceModel]] = (
        None
    )
    relatedManyToMany: Optional[List[TestableRelatedResourceModel]] = None
    relatedOneToMany: Optional[List[TestableRelatedResourceModel]] = None
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
    model_config = ConfigDict(
        extra='forbid',
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
    embedded: Optional[List[TestableEmbeddedResource.TestableEmbeddedResourceModel]] = (
        None
    )
    relatedManyToMany: Optional[List[TestableRelatedResourceModel]] = None
    relatedOneToMany: Optional[List[TestableRelatedResourceModel]] = None


Model.model_rebuild()
TestableRelatedResourceModel.model_rebuild()
TestableEntityResourceModel.model_rebuild()
