# template version: 1.0.0

from typing import Optional

from lib_ai.agent.utils.ai_message.constants import MessageRole
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.constants import FieldRelation
from lib_shared.core.utils.field.field import Field

from lib_model.chat.chat.chat import Chat


class MessageModel(BaseModel):
    content: str = Field()

    chat: Optional[Chat] = Field(
        relation=FieldRelation.MANY_TO_ONE,
        default=None,
    )

    role: Optional[MessageRole] = Field(default=None)
