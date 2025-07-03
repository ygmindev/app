from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Any, List, Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ...billing.Bank import Bank as Bank_1
from ...billing.Card import Card as Card_1
from ...billing.PaymentMethod import PaymentMethod as PaymentMethod_1
from ...chat.Chat import Chat as Chat_1
from ...chat.Message import Message as Message_1
from ...user.User import User as User_1
from ..Access import Access as Access_1
from ..Role import Role as Role_1


class ACCESSROLE(Enum):
    Admin = 'Admin'
    User = 'User'


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


class Model(RootModel[SignInModel]):
    root: SignInModel


class SignInModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    isNew: Optional[bool] = None
    token: Optional[str] = None
    user: RefModelUserModel


class RefModelUserModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    Access: Optional[List[Access_1.AccessModel]] = None
    Bank: Optional[List[Bank_1.BankModel]] = None
    Card: Optional[List[Card_1.CardModel]] = None
    Chat: Optional[List[Chat_1.ChatModel]] = None
    LinkedUser: Optional[List[RefModelLinkedUserModel]] = None
    Message: Optional[List[Message_1.MessageModel]] = None
    PaymentMethod: Optional[List[PaymentMethod_1.PaymentMethodModel]] = None
    callingCode: Optional[str] = None
    email: Optional[str] = None
    first: Optional[str] = None
    last: Optional[str] = None
    paymentMethodPrimary: Optional[RefModelPaymentMethodModel] = None
    phone: Optional[str] = None


class RefModelGroupModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    Access: Optional[List[Access_1.AccessModel]] = None
    Role: Optional[List[Role_1.RoleModel]] = None
    logo: Optional[str] = None
    name: Optional[str] = None
    types: Optional[List[Any]] = None


class CollectionModelUserModel(RootModel[List[User_1.UserModel]]):
    root: List[User_1.UserModel]


Model.model_rebuild()
SignInModel.model_rebuild()
RefModelUserModel.model_rebuild()
RefModelGroupModel.model_rebuild()
