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
from ...user.user import user
from ..access import access


class ACCESSROLE(Enum):
    Admin = 'Admin'
    User = 'User'


class CARDFUNDING(Enum):
    credit = 'credit'
    debit = 'debit'


class RefModelChatModel(BaseModel):
    pass
    model_config = ConfigDict(
        extra='allow',
    )


class LINKEDUSERTYPE(RootModel[Literal['stripe']]):
    root: Literal['stripe']


class PAYMENTMETHODTYPE(Enum):
    bank = 'bank'
    card = 'card'


class RefModelPaymentMethodModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
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


class GROUPTYPE(RootModel[Any]):
    root: Any


class RefModelLinkedUserModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    externalId: Optional[str] = None
    type: Optional[LINKEDUSERTYPE] = None


class CollectionModelPaymentMethodModel(
    RootModel[List[payment_method.PaymentMethodModel]]
):
    root: List[payment_method.PaymentMethodModel]


class PaymentMethodModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
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


class Model(RootModel[RoleModel]):
    root: RoleModel


class RoleModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    Group: Optional[RefModelGroupModel] = None
    name: Optional[str] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class RefModelGroupModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    Access: Optional[CollectionModelAccessModel] = None
    Role: Optional[CollectionModelRoleModel] = None
    logo: Optional[str] = None
    name: Optional[str] = None
    types: Optional[List[GROUPTYPE]] = None


class CollectionModelAccessModel(RootModel[List[access.AccessModel]]):
    root: List[access.AccessModel]


class AccessModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    Group: Optional[RefModelGroupModel] = None
    Role: List[ACCESSROLE]
    User: RefModelUserModel
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class RefModelUserModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    beforeCreate: None = None
    Access: Optional[CollectionModelAccessModel] = None
    Bank: Optional[CollectionModelBankModel] = None
    Card: Optional[CollectionModelCardModel] = None
    Chat: Optional[CollectionModelChatModel] = None
    LinkedUser: Optional[List[RefModelLinkedUserModel]] = None
    Message: Optional[CollectionModelMessageModel] = None
    PaymentMethod: Optional[CollectionModelPaymentMethodModel] = None
    callingCode: Optional[str] = None
    email: Optional[str] = None
    first: Optional[str] = None
    last: Optional[str] = None
    paymentMethodPrimary: Optional[RefModelPaymentMethodModel] = None
    phone: Optional[str] = None


class CollectionModelBankModel(RootModel[List[bank_1.BankModel]]):
    root: List[bank_1.BankModel]


class BankModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    User: CollectionModelUserModel
    externalId: str
    fingerprint: str
    isPrimary: Optional[bool] = None
    last4: str
    name: str
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class CollectionModelUserModel(RootModel[List[user.UserModel]]):
    root: List[user.UserModel]


class UserModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    Access: Optional[CollectionModelAccessModel] = None
    Bank: Optional[CollectionModelBankModel] = None
    Card: Optional[CollectionModelCardModel] = None
    Chat: Optional[CollectionModelChatModel] = None
    LinkedUser: Optional[List[RefModelLinkedUserModel]] = None
    Message: Optional[CollectionModelMessageModel] = None
    PaymentMethod: Optional[CollectionModelPaymentMethodModel] = None
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


class CollectionModelCardModel(RootModel[List[card_1.CardModel]]):
    root: List[card_1.CardModel]


class CardModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    User: Optional[CollectionModelUserModel] = None
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


class CollectionModelChatModel(RootModel[List[chat_1.ChatModel]]):
    root: List[chat_1.ChatModel]


class ChatModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    messsages: Optional[CollectionModelMessageModel] = None
    name: Optional[str] = None
    participants: Optional[CollectionModelUserModel] = None
    createdBy: Optional[RefModelUserModel] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class CollectionModelMessageModel(RootModel[List[message.MessageModel]]):
    root: List[message.MessageModel]


class MessageModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    chat: RefModelChatModel
    text: Optional[str] = None
    createdBy: Optional[RefModelUserModel] = None
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class CollectionModelRoleModel(RootModel[List[RoleModel]]):
    root: List[RoleModel]


Model.model_rebuild()
RoleModel.model_rebuild()
RefModelGroupModel.model_rebuild()
CollectionModelAccessModel.model_rebuild()
AccessModel.model_rebuild()
RefModelUserModel.model_rebuild()
BankModel.model_rebuild()
UserModel.model_rebuild()
ChatModel.model_rebuild()
