from __future__ import annotations

from datetime import datetime
from typing import Any, List, Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class RoleModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Group: Optional[Any] = None
    name: Optional[str] = None
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class AccessModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Group: Optional[Any] = None
    Role: List[Literal['Admin']]
    User: Any
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class GroupModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Access: Optional[List[AccessModel]] = None
    Role: Optional[List[RoleModel]] = None
    logo: Optional[str] = None
    name: str
    types: Optional[List[Any]] = None
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[GroupModel]):
    root: GroupModel
