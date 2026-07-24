# template version: 1.0.0


from typing import Self

from langchain_core.messages import AIMessage as LangchainAIMessage
from langchain_core.messages import (
    BaseMessage,
    HumanMessage,
    SystemMessage,
    ToolMessage,
)
from langchain_core.messages.tool import ToolCall as LangchainToolCall

from lib_ai.agent.utils.ai_message.ai_message_models import AIMessageModel, ToolCall
from lib_ai.agent.utils.ai_message.constants import MessageRole


class _AIMessage(AIMessageModel):
    def serialize(self) -> BaseMessage:
        match self.role:
            case MessageRole.USER:
                return HumanMessage(content=self.content)
            case MessageRole.ASSISTANT:
                tool_calls = []
                if self.tool_calls:
                    tool_calls = [
                        LangchainToolCall(
                            id=tool_call.id,
                            name=tool_call.name,
                            args=tool_call.params,
                        )
                        for tool_call in (self.tool_calls or [])
                    ]
                return LangchainAIMessage(
                    content=str(self.content),
                    tool_calls=tool_calls,
                )
            case MessageRole.SYSTEM:
                return SystemMessage(content=str(self.content))
            case MessageRole.TOOL:
                if self.current_tool_call:
                    return ToolMessage(
                        content=str(self.content),
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
                role=MessageRole.USER,
                content=str(message.content),
            )
        elif isinstance(message, LangchainAIMessage):
            instance = cls(
                role=MessageRole.SYSTEM,
                content=str(message.content),
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
                role=MessageRole.SYSTEM,
                content=str(message.content),
            )
        elif isinstance(message, ToolMessage):
            instance = cls(
                role=MessageRole.TOOL,
                content=str(message.content),
                current_tool_call=ToolCall(
                    id=str(message.tool_call_id),
                    name=str(message.name),
                    params={},
                ),
            )
        else:
            raise ValueError(f"Unknown message type: {type(message)}")
        return instance


class AIMessage(_AIMessage): ...
