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
from ...user.user import user
from ..message import message


class PartialChatModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='allow',
    )


class ACCESSROLE(Enum):
    ADMIN = 'Admin'
    USER = 'User'


class CARDFUNDING(Enum):
    CREDIT = 'credit'
    DEBIT = 'debit'


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


class Model(RootModel[ChatModel]):
    root: ChatModel


class ChatModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    messsages: Optional[List[message.MessageModel]] = None
    name: Optional[str] = None
    participants: Optional[List[user.UserModel]] = None
    createdBy: Optional[PartialUserModel] = None
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class PartialUserModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    field_id: Optional[str] = None
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    Access: Optional[List[access.AccessModel]] = None
    Bank: Optional[List[bank.BankModel]] = None
    Card: Optional[List[card.CardModel]] = None
    Chat: Optional[List[ChatModel]] = None
    LinkedUser: Optional[List[PartialLinkedUserModel]] = None
    Message: Optional[List[message.MessageModel]] = None
    PaymentMethod: Optional[List[payment_method.PaymentMethodModel]] = None
    callingCode: Optional[str] = None
    email: Optional[str] = None
    first: Optional[str] = None
    last: Optional[str] = None
    paymentMethodPrimary: Optional[PartialPaymentMethodModel] = None
    phone: Optional[str] = None


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


Model.model_rebuild()
ChatModel.model_rebuild()
PartialUserModel.model_rebuild()
RefModelGroupModel.model_rebuild()
PartialGroupModel.model_rebuild()
