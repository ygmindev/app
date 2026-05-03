from lib_model.chat.message.message_constants import MESSAGE_RESOURCE_NAME
from lib_model.core.utils.entity import Entity

from .message_models import MessageModel


@Entity(name=MESSAGE_RESOURCE_NAME)
class Message(MessageModel):
    content: str
