from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Any, List, Literal, Optional

from pydantic import BaseModel, ConfigDict, RootModel

from ...auth.access import access
from ...auth.role import role
from ...billing.bank import bank
from ...billing.card import card
from ...billing.payment_method import payment_method
from ...chat.chat import chat
from ...chat.message import message


class ACCESSROLE(Enum):
    ADMIN = 'Admin'
    USER = 'User'


class PartialUserModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='allow',
    )


class CARDFUNDING(Enum):
    CREDIT = 'credit'
    DEBIT = 'debit'


class PartialChatModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='allow',
    )


class PAYMENTMETHODTYPE(Enum):
    BANK = 'bank'
    CARD = 'card'


class PartialPaymentMethodModel(BaseModel):
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


class RefModelUserModel(RootModel[PartialUserModel]):
    root: PartialUserModel


class RefModelChatModel(RootModel[PartialChatModel]):
    root: PartialChatModel


class PartialLinkedUserModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    field_id: Optional[str] = None
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    externalId: Optional[str] = None
    type: Literal['stripe'] = 'stripe'


class Model(RootModel[UserModel]):
    root: UserModel


class UserModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    Access: Optional[List[access.AccessModel]] = None
    Bank: Optional[List[bank.BankModel]] = None
    Card: Optional[List[card.CardModel]] = None
    Chat: Optional[List[chat.ChatModel]] = None
    LinkedUser: Optional[List[PartialLinkedUserModel]] = None
    Message: Optional[List[message.MessageModel]] = None
    PaymentMethod: Optional[List[payment_method.PaymentMethodModel]] = None
    callingCode: Optional[str] = None
    email: Optional[str] = None
    first: Optional[str] = None
    last: Optional[str] = None
    paymentMethodPrimary: Optional[PartialPaymentMethodModel] = None
    phone: Optional[str] = None
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class RefModelGroupModel(RootModel[PartialGroupModel]):
    root: PartialGroupModel


class PartialGroupModel(BaseModel):
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


class CollectionModelUserModel(RootModel[List[UserModel]]):
    root: List[UserModel]


Model.model_rebuild()
UserModel.model_rebuild()
RefModelGroupModel.model_rebuild()
PartialGroupModel.model_rebuild()
