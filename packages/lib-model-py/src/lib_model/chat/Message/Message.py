from __future__ import annotations

from datetime import datetime
from typing import Any, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class Chat(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    field_id: Optional[str] = Field(None, alias='_id')
    beforeCreate: None = None
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    createdBy: Optional[Any] = None
    messsages: Optional[Any] = None
    name: Optional[str] = None
    participants: Optional[Any] = None


class MessageModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    chat: Chat
    text: Optional[str] = None
    createdBy: Optional[Any] = None
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[MessageModel]):
    root: MessageModel
