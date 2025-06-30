from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ...user.User import User


class CARDFUNDING(Enum):
    credit = 'credit'
    debit = 'debit'


class CardModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    expMonth: float
    expYear: float
    externalId: str
    fingerprint: str
    funding: CARDFUNDING
    isPrimary: Optional[bool] = None
    last4: str
    name: str
    user: Optional[List[User.UserModel]] = None
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[CardModel]):
    root: CardModel
