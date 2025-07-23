from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Any, List, Literal, Optional

from pydantic import BaseModel, ConfigDict, RootModel

from ...auth.access import access
from ...auth.role import role
from ...chat.chat import chat
from ...chat.message import message
from ...user.user import user
from ..bank import bank as bank_1
from ..payment_method import payment_method


class ACCESSROLE(Enum):
    Admin = 'Admin'
    User = 'User'


class RefModelUserModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='allow',
    )


class RefModelChatModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='allow',
    )


class PAYMENTMETHODTYPE(Enum):
    bank = 'bank'
    card = 'card'


class RefModelPaymentMethodModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    field_id: Optional[str] = None
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    externalId: Optional[str] = None
    fingerprint: Optional[str] = None
    isPrimary: Optional[bool] = None
    last4: Optional[str] = None
    name: Optional[str] = None
    type: Optional[PAYMENTMETHODTYPE] = None


class CARDFUNDING(Enum):
    credit = 'credit'
    debit = 'debit'


class RefModelLinkedUserModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    field_id: Optional[str] = None
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    externalId: Optional[str] = None
    type: Literal['stripe'] = 'stripe'


class CollectionModelPaymentMethodModel(
    RootModel[List[payment_method.PaymentMethodModel]]
):
    root: List[payment_method.PaymentMethodModel]


class Model(RootModel[CardModel]):
    root: CardModel


class CardModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    User: Optional[List[user.UserModel]] = None
    expMonth: float
    expYear: float
    externalId: str
    fingerprint: str
    funding: CARDFUNDING
    isPrimary: Optional[bool] = None
    last4: str
    name: str
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class RefModelGroupModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    field_id: Optional[str] = None
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    Access: Optional[List[access.AccessModel]] = None
    Role: Optional[List[role.RoleModel]] = None
    logo: Optional[str] = None
    name: Optional[str] = None
    types: Optional[List[Any]] = None


class CollectionModelBankModel(RootModel[List[bank_1.BankModel]]):
    root: List[bank_1.BankModel]


class CollectionModelCardModel(RootModel[List[CardModel]]):
    root: List[CardModel]


class CollectionModelChatModel(RootModel[List[chat.ChatModel]]):
    root: List[chat.ChatModel]


class CollectionModelMessageModel(RootModel[List[message.MessageModel]]):
    root: List[message.MessageModel]


Model.model_rebuild()
CardModel.model_rebuild()
RefModelGroupModel.model_rebuild()
CollectionModelBankModel.model_rebuild()
