from lib_model.chat.message.constants import MESSAGE_RESOURCE_NAME
from lib_model.core.utils.protected_resource.protected_resource import ProtectedResource

from .message_models import MessageModel


class Message(
    ProtectedResource,
    MessageModel,
    name=MESSAGE_RESOURCE_NAME,
): ...
