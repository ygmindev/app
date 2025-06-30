from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ...user.User import User


class BankModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    externalId: str
    fingerprint: str
    isPrimary: Optional[bool] = None
    last4: str
    name: str
    user: Optional[List[User.UserModel]] = None
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[BankModel]):
    root: BankModel
