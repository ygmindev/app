from lib_model.ai.llm_message.llm_message_constants import (
    LlmMessageRole,
)
from lib_model.chat.message.message import Message
from lib_model.core.utils.entity import Entity

from .llm_message_models import LlmMessageModel


@Entity()
class LlmMessage(Message, LlmMessageModel):
    role: LlmMessageRole
