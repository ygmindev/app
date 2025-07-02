from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Any, List, Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ...auth.Access import Access as Access_1
from ...auth.Role import Role as Role_1
from ...billing.Bank import Bank as Bank_1
from ...billing.Card import Card as Card_1
from ...billing.PaymentMethod import PaymentMethod as PaymentMethod_1
from ...chat.Chat import Chat as Chat_1
from ...chat.Message import Message as Message_1


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


class Model(RootModel[UserModel]):
    root: UserModel


class UserModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    Access: Optional[List[Access_1.AccessModel]] = None
    Bank: Optional[List[Bank_1.BankModel]] = None
    Card: Optional[List[Card_1.CardModel]] = None
    Chat: Optional[List[Chat_1.ChatModel]] = None
    linkedUser: Optional[List[RefModelLinkedUserModel]] = None
    Message: Optional[List[Message_1.MessageModel]] = None
    PaymentMethod: Optional[List[PaymentMethod_1.PaymentMethodModel]] = None
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
    Access: Optional[List[Access_1.AccessModel]] = None
    Role: Optional[List[Role_1.RoleModel]] = None
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
    User: List[UserModel]
    externalId: str
    fingerprint: str
    isPrimary: Optional[bool] = None
    last4: str
    name: str
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class CardModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    User: Optional[List[UserModel]] = None
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
    messsages: Optional[List[Message_1.MessageModel]] = None
    name: Optional[str] = None
    participants: Optional[List[UserModel]] = None
    createdBy: Optional[RefModelUserModel] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


Model.model_rebuild()
UserModel.model_rebuild()
AccessModel.model_rebuild()
RefModelGroupModel.model_rebuild()
BankModel.model_rebuild()
ChatModel.model_rebuild()
