from lib_model.chat.chat.chat_models import ChatModel
from lib_model.chat.chat.constants import CHAT_RESOURCE_NAME
from lib_model.core.utils.protected_resource.protected_resource import ProtectedResource


class Chat(
    ProtectedResource,
    ChatModel,
    name=CHAT_RESOURCE_NAME,
): ...
