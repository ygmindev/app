# template version: 1.0.0


from typing import Optional, Self

from langchain_core.messages import (
    BaseMessage,
)
from lib_model.chat.message.message_models import MessageModel
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.ai_message.constants import MessageRole


class ToolCall(BaseModel):
    id: str
    name: str
    params: dict


class AIMessageModel(MessageModel):
    current_tool_call: Optional[ToolCall] = Field(default=None)

    tool_calls: list[ToolCall] = Field(default_value=list)

    def serialize(self) -> BaseMessage: ...

    @classmethod
    def deserialize(
        cls,
        message: BaseMessage,
    ) -> Self: ...
