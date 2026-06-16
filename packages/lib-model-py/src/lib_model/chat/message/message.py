from typing import Optional

from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.field.field_constants import FieldRelation

from lib_model.chat.chat.chat import Chat
from lib_model.core.utils.database_entity.database_entity import DatabaseEntity

from .message_constants import MESSAGE_RESOURCE_NAME, MessageRole
from .message_models import MessageModel


class Message(
    DatabaseEntity,
    MessageModel,
    name=MESSAGE_RESOURCE_NAME,
):
    chat: Chat = Field(relation=FieldRelation.MANY_TO_ONE)

    content: str = Field()

    role: Optional[MessageRole] = Field(default=None)
