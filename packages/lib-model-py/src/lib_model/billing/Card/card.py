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
from ..bank import bank
from ..payment_method import payment_method


class ACCESSROLE(Enum):
    ADMIN = 'Admin'
    USER = 'User'


class PartialUserModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='allow',
    )


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


class CARDFUNDING(Enum):
    CREDIT = 'credit'
    DEBIT = 'debit'


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


class CollectionModelPaymentMethodModel(
    RootModel[List[payment_method.PaymentMethodModel]]
):
    root: List[payment_method.PaymentMethodModel]


class RefModelPaymentMethodModel(RootModel[PartialPaymentMethodModel]):
    root: PartialPaymentMethodModel


class RefModelLinkedUserModel(RootModel[PartialLinkedUserModel]):
    root: PartialLinkedUserModel


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


class CollectionModelBankModel(RootModel[List[bank.BankModel]]):
    root: List[bank.BankModel]


class CollectionModelCardModel(RootModel[List[CardModel]]):
    root: List[CardModel]


class CollectionModelChatModel(RootModel[List[chat.ChatModel]]):
    root: List[chat.ChatModel]


class CollectionModelMessageModel(RootModel[List[message.MessageModel]]):
    root: List[message.MessageModel]


Model.model_rebuild()
CardModel.model_rebuild()
RefModelGroupModel.model_rebuild()
PartialGroupModel.model_rebuild()
CollectionModelBankModel.model_rebuild()
