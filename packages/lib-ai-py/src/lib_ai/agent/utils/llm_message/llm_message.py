# template version: 1.0.0

from typing import Optional, Self

from langchain_core.messages import (
    AIMessage,
    BaseMessage,
    HumanMessage,
    SystemMessage,
    ToolMessage,
)
from langchain_core.messages.tool import ToolCall as _ToolCall
from lib_shared.core.utils.base_model import BaseModel

from lib_ai.agent.utils.llm_message.constants import LLM_ROLE

from .llm_message_models import LlmMessageModel, _LlmMessageModel


class ToolCall(BaseModel):
    id: str
    name: str
    params: dict


class _LlmMessage(BaseModel, _LlmMessageModel):
    role: LLM_ROLE
    message: str = ""
    tool_calls: Optional[list[ToolCall]] = None
    current_tool_call: Optional[ToolCall] = None

    def serialize(self) -> BaseMessage:
        match self.role:
            case LLM_ROLE.USER:
                return HumanMessage(content=self.message)
            case LLM_ROLE.ASSISTANT:
                tool_calls = None
                if self.tool_calls:
                    tool_calls = [
                        _ToolCall(
                            id=tool_call.id,
                            name=tool_call.name,
                            args=tool_call.params,
                        )
                        for tool_call in (self.tool_calls or [])
                    ]
                return AIMessage(
                    content=self.message,
                    tool_calls=tool_calls,
                )
            case LLM_ROLE.SYSTEM:
                return SystemMessage(content=self.message)
            case LLM_ROLE.TOOL:
                if self.current_tool_call:
                    return ToolMessage(
                        content=self.message,
                        tool_call_id=self.current_tool_call.id,
                    )
                raise ValueError("current_tool_call is None")
            case _:
                raise ValueError(f"Unknown role: {self.role}")

    @classmethod
    def deserialize(
        cls,
        message: BaseMessage,
    ) -> Self:
        if isinstance(message, HumanMessage):
            instance = cls(
                role=LLM_ROLE.USER,
                message=str(message.content),
            )
        elif isinstance(message, AIMessage):
            instance = cls(
                role=LLM_ROLE.ASSISTANT,
                message=str(message.content),
                tool_calls=[
                    ToolCall(
                        id=str(x["id"]),
                        name=x["name"],
                        params=x["args"],
                    )
                    for x in message.tool_calls
                ],
            )
        elif isinstance(message, SystemMessage):
            instance = cls(
                role=LLM_ROLE.SYSTEM,
                message=str(message.content),
            )
        elif isinstance(message, ToolMessage):
            instance = cls(
                role=LLM_ROLE.TOOL,
                message=str(message.content),
                current_tool_call=ToolCall(
                    id=str(message.tool_call_id),
                    name=str(message.name),
                    params={},
                ),
            )
        else:
            raise ValueError(f"Unknown message type: {type(message)}")
        return instance


class LlmMessage(_LlmMessage, LlmMessageModel): ...
