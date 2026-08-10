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
from lib_model.chat.content.constants import ContentType
from lib_model.chat.content.content import Content
from lib_model.chat.message.message import Message

from lib_ai.agent.utils.ai_message.ai_message_models import AIMessageModel, ToolCall
from lib_ai.agent.utils.ai_message.constants import MessageRole


class _AIMessage(AIMessageModel):
    def _serialize_content(
        self,
        content: Content,
    ) -> dict:
        value = content.value or ""
        content_type = content.content_type
        match content_type:
            case ContentType.IMAGE:
                return {
                    "type": "image_url",
                    "image_url": {"url": value},
                }
            case _:
                return {"type": "text", "text": value}

    @classmethod
    def _deserialize_content(
        cls,
        data: str | list[dict | str],
    ) -> tuple[str | None, list[Content] | None]:
        if isinstance(data, str):
            return (data, None)
        content: list[Content] = []
        for x in data:
            if isinstance(x, str):
                content.append(Content(value=x))
            else:
                content_type = x.get("type") if isinstance(x, dict) else None
                match content_type:
                    case "image_url":
                        url = x.get("image_url", {}).get("url", "")
                        content.append(
                            Content(content_type=ContentType.IMAGE, value=url)
                        )
                    case _:
                        content.append(Content(value=x.get("text", str(x))))
        return (None, content)

    def serialize(self) -> BaseMessage:
        text, content = [self.text, self.content]
        contents: str | list[dict | str] | None = text
        if text is None and content is None:
            return LangchainAIMessage(content="")

        if content is not None and len(content) > 0:
            contents = [
                self._serialize_content(c)
                for c in (([] if text is None else [Content(value=text)]) + content)
            ]

        match self.role:
            case MessageRole.USER:
                return HumanMessage(content=contents)
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
                    content=contents,
                    tool_calls=tool_calls,
                )
            case MessageRole.SYSTEM:
                return SystemMessage(content=contents)
            case MessageRole.TOOL:
                if self.current_tool_call:
                    return ToolMessage(
                        content=contents,
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
        text, content = cls._deserialize_content(message.content)
        if isinstance(message, HumanMessage):
            instance = cls(
                role=MessageRole.USER,
                content=content,
                text=text,
            )
        elif isinstance(message, LangchainAIMessage):
            instance = cls(
                role=MessageRole.ASSISTANT,
                content=content,
                text=text,
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
                content=content,
                text=text,
            )
        elif isinstance(message, ToolMessage):
            instance = cls(
                role=MessageRole.TOOL,
                content=content,
                current_tool_call=ToolCall(
                    id=str(message.tool_call_id),
                    name=str(message.name),
                    params={},
                ),
                text=text,
            )
        else:
            raise ValueError(f"Unknown message type: {type(message)}")
        return instance


class AIMessage(
    _AIMessage,
    Message,
): ...
