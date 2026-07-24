from lib_model.chat.message.constants import MESSAGE_RESOURCE_NAME
from lib_model.core.utils.database_entity.database_entity import DatabaseEntity

from .message_models import MessageModel


class Message(
    DatabaseEntity,
    MessageModel,
    name=MESSAGE_RESOURCE_NAME,
): ...
