from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Any, List, Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ...auth.Access import Access as Access_1
from ...auth.Role import Role as Role_1
from ...chat.Chat import Chat
from ...chat.Message import Message
from ...user.User import User as User_1
from ..Card import Card
from ..PaymentMethod import PaymentMethod


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


class CollectionModelPaymentMethodModel(RootModel[List[PaymentMethod.PaymentMethodModel]]):
    root: List[PaymentMethod.PaymentMethodModel]


class Model(RootModel[BankModel]):
    root: BankModel


class BankModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    User: List[User_1.UserModel]
    externalId: str
    fingerprint: str
    isPrimary: Optional[bool] = None
    last4: str
    name: str
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
    Access: Optional[List[Access_1.AccessModel]] = None
    Role: Optional[List[Role_1.RoleModel]] = None
    logo: Optional[str] = None
    name: Optional[str] = None
    types: Optional[List[Any]] = None


class CollectionModelBankModel(RootModel[List[BankModel]]):
    root: List[BankModel]


class CollectionModelCardModel(RootModel[List[Card.CardModel]]):
    root: List[Card.CardModel]


class CollectionModelChatModel(RootModel[List[Chat.ChatModel]]):
    root: List[Chat.ChatModel]


class CollectionModelMessageModel(RootModel[List[Message.MessageModel]]):
    root: List[Message.MessageModel]


Model.model_rebuild()
BankModel.model_rebuild()
RefModelGroupModel.model_rebuild()
