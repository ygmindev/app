from lib_model.chat.chat.chat_models import ChatModel
from lib_model.chat.chat.constants import CHAT_RESOURCE_NAME
from lib_model.core.utils.database_entity.database_entity import DatabaseEntity


class Chat(
    DatabaseEntity,
    ChatModel,
    name=CHAT_RESOURCE_NAME,
): ...
