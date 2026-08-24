# template version: 1.0.0


from typing import Self

from langchain_core.messages import (
    BaseMessage,
)
from lib_model.chat.message.message_models import MessageModel
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field


class ToolCall(BaseModel):
    id: str = Field()
    name: str = Field()
    params: dict = Field()


class AIMessageModel(MessageModel):
    current_tool_call: ToolCall | None = Field(default=None)

    tool_calls: list[ToolCall] = Field(default_factory=list)

    def serialize(self) -> BaseMessage: ...

    @classmethod
    def deserialize(
        cls,
        message: BaseMessage,
    ) -> Self: ...
