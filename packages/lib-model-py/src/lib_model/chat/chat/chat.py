from __future__ import annotations

from typing import TYPE_CHECKING, Optional

from lib_shared.core.utils.field.constants import FieldRelation
from lib_shared.core.utils.field.field import Field

from lib_model.chat.chat.chat_models import ChatModel
from lib_model.core.utils.database_entity.database_entity import DatabaseEntity

from .constants import CHAT_RESOURCE_NAME

if TYPE_CHECKING:
    from lib_model.chat.message.message import Message


class Chat(
    DatabaseEntity,
    ChatModel,
    name=CHAT_RESOURCE_NAME,
):
    messages: Optional[list[Message]] = Field(
        relation=FieldRelation.ONE_TO_MANY,
        root="chat",
        default=None,
    )

    name: Optional[str] = Field()
