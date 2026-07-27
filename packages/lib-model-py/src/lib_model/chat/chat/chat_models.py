# template version: 1.0.0
from __future__ import annotations

from typing import TYPE_CHECKING

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.constants import FieldRelation
from lib_shared.core.utils.field.field import Field

if TYPE_CHECKING:
    from lib_model.chat.message.message import Message


class ChatModel(BaseModel):
    name: str | None = Field(default=None)

    messages: list[Message] | None = Field(
        relation=FieldRelation.ONE_TO_MANY,
        root="chat",
        default=None,
    )
