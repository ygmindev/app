# template version: 1.0.0
from __future__ import annotations

from typing import TYPE_CHECKING

from lib_shared.core.utils.field.constants import FieldRelation
from lib_shared.core.utils.field.field import Field

from lib_model.chat.chat.constants import CHAT_RESOURCE_NAME
from lib_model.core.utils.protected_resource.protected_resource import ProtectedResource

if TYPE_CHECKING:
    from lib_model.chat.message.message import Message


class Chat(
    ProtectedResource,
    name=CHAT_RESOURCE_NAME,
):
    name: str | None = Field(default=None)

    messages: list[Message] | None = Field(
        relation=FieldRelation.ONE_TO_MANY,
        root="chat",
        default=None,
    )
