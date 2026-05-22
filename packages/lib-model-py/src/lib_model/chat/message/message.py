from lib_model.core.utils.entity import Entity

from .message_models import MessageModel


@Entity()
class Message(MessageModel):
    content: str
