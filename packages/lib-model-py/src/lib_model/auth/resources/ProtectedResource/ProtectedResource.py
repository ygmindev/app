from __future__ import annotations

from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ....user.resources.User import User


class ProtectedResourceModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    createdBy: Optional[User.UserModel] = None
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[ProtectedResourceModel]):
    root: ProtectedResourceModel
