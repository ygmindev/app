# template version: 1.0.0
from __future__ import annotations

from lib_ai.agent.utils.ai_message.constants import MessageRole
from lib_shared.core.utils.field.constants import FieldRelation
from lib_shared.core.utils.field.field import Field

from lib_model.chat.chat.chat import Chat
from lib_model.chat.content.content import Content
from lib_model.core.utils.protected_resource.protected_resource_models import (
    ProtectedResourceModel,
)


class MessageModel(ProtectedResourceModel):
    content: list[Content] | None = Field(default=None)

    chat: Chat | None = Field(
        relation=FieldRelation.MANY_TO_ONE,
        default=None,
    )

    role: MessageRole | None = Field(default=None)

    text: str | None = Field(default=None)
