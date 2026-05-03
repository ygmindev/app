from lib_model.ai.llm_message.llm_message_constants import (
    LLM_MESSAGE_RESOURCE_NAME,
    LlmMessageRole,
)
from lib_model.chat.message.message import Message
from lib_model.core.utils.entity import Entity

from .llm_message_models import LlmMessageModel


@Entity(name=LLM_MESSAGE_RESOURCE_NAME)
class LlmMessage(Message, LlmMessageModel):
    role: LlmMessageRole
