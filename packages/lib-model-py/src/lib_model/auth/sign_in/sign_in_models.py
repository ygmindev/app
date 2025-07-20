from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Any, List, Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ...billing.bank import bank as bank_1
from ...billing.card import card as card_1
from ...billing.payment_method import payment_method
from ...chat.chat import chat as chat_1
from ...chat.message import message
from ...user.user import user as user_1
from ..access import access
from ..role import role


class ACCESSROLE(Enum):
    Admin = 'Admin'
    User = 'User'


class RefModelUserModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='forbid',
    )


class CARDFUNDING(Enum):
    credit = 'credit'
    debit = 'debit'


class RefModelChatModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='forbid',
    )


class PAYMENTMETHODTYPE(Enum):
    bank = 'bank'
    card = 'card'


class RefModelPaymentMethodModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    externalId: Optional[str] = None
    fingerprint: Optional[str] = None
    isPrimary: Optional[bool] = None
    last4: Optional[str] = None
    name: Optional[str] = None
    type: Optional[PAYMENTMETHODTYPE] = None


class MessageModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    chat: RefModelChatModel
    text: Optional[str] = None
    createdBy: Optional[RefModelUserModel] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class RefModelLinkedUserModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    externalId: Optional[str] = None
    type: Literal['stripe'] = 'stripe'


class PaymentMethodModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    externalId: str
    fingerprint: str
    isPrimary: Optional[bool] = None
    last4: str
    name: str
    type: PAYMENTMETHODTYPE
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[SignInModel]):
    root: SignInModel


class User(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    Access: Optional[List[access.AccessModel]] = None
    Bank: Optional[List[bank_1.BankModel]] = None
    Card: Optional[List[card_1.CardModel]] = None
    Chat: Optional[List[chat_1.ChatModel]] = None
    LinkedUser: Optional[List[RefModelLinkedUserModel]] = None
    Message: Optional[List[message.MessageModel]] = None
    PaymentMethod: Optional[List[payment_method.PaymentMethodModel]] = None
    callingCode: Optional[str] = None
    email: Optional[str] = None
    first: Optional[str] = None
    last: Optional[str] = None
    paymentMethodPrimary: Optional[RefModelPaymentMethodModel] = None
    phone: Optional[str] = None


class SignInModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    isNew: Optional[bool] = None
    token: Optional[str] = None
    user: User


class AccessModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Group: Optional[RefModelGroupModel] = None
    Role: List[ACCESSROLE]
    User: RefModelUserModel
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class RefModelGroupModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    Access: Optional[List[access.AccessModel]] = None
    Role: Optional[List[role.RoleModel]] = None
    logo: Optional[str] = None
    name: Optional[str] = None
    types: Optional[List[Any]] = None


class RoleModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Group: Optional[RefModelGroupModel] = None
    name: Optional[str] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class BankModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    User: List[user_1.UserModel]
    externalId: str
    fingerprint: str
    isPrimary: Optional[bool] = None
    last4: str
    name: str
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class UserModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Access: Optional[List[access.AccessModel]] = None
    Bank: Optional[List[bank_1.BankModel]] = None
    Card: Optional[List[card_1.CardModel]] = None
    Chat: Optional[List[chat_1.ChatModel]] = None
    LinkedUser: Optional[List[RefModelLinkedUserModel]] = None
    Message: Optional[List[message.MessageModel]] = None
    PaymentMethod: Optional[List[payment_method.PaymentMethodModel]] = None
    callingCode: Optional[str] = None
    email: Optional[str] = None
    first: Optional[str] = None
    last: Optional[str] = None
    paymentMethodPrimary: Optional[RefModelPaymentMethodModel] = None
    phone: Optional[str] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class CardModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    User: Optional[List[user_1.UserModel]] = None
    expMonth: float
    expYear: float
    externalId: str
    fingerprint: str
    funding: CARDFUNDING
    isPrimary: Optional[bool] = None
    last4: str
    name: str
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class ChatModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    messsages: Optional[List[message.MessageModel]] = None
    name: Optional[str] = None
    participants: Optional[List[user_1.UserModel]] = None
    createdBy: Optional[RefModelUserModel] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


Model.model_rebuild()
User.model_rebuild()
AccessModel.model_rebuild()
RefModelGroupModel.model_rebuild()
BankModel.model_rebuild()
UserModel.model_rebuild()
ChatModel.model_rebuild()
