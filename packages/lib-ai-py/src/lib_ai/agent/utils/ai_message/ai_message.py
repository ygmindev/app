# template version: 1.0.0


import base64
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
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.ai_message.constants import MessageRole


class ToolCall(BaseModel):
    id: str = Field()
    name: str = Field()
    params: dict = Field()


class _AIMessage(Message):
    current_tool_call: ToolCall | None = Field(default=None)

    tool_calls: list[ToolCall] = Field(default_factory=list)

    def _serialize_content(
        self,
        content: Content,
    ) -> dict:
        value = content.value or ""
        content_type = content.content_type
        match content_type:
            case ContentType.IMAGE:
                if value.startswith("data:"):
                    return {
                        "type": "image_url",
                        "image_url": {"url": value},
                    }
                if value.startswith("http://") or value.startswith("https://"):
                    return {
                        "type": "image_url",
                        "image_url": {"url": value},
                    }
                with open(value, "rb") as image_file:
                    image_base64 = base64.b64encode(image_file.read()).decode("utf-8")
                ext = value.rsplit(".", 1)[-1].lower() if "." in value else "png"
                mime = {
                    "jpg": "image/jpeg",
                    "jpeg": "image/jpeg",
                    "png": "image/png",
                    "gif": "image/gif",
                    "webp": "image/webp",
                }.get(ext, "image/png")
                return {
                    "type": "image_url",
                    "image_url": {"url": f"data:{mime};base64,{image_base64}"},
                }
            case ContentType.PDF:
                with open(value, "rb") as pdf_file:
                    pdf_base64 = base64.b64encode(pdf_file.read()).decode("utf-8")
                filename = value.rsplit("/", 1)[-1] or "document.pdf"
                if not filename.lower().endswith(".pdf"):
                    filename = f"{filename}.pdf"
                return {
                    "type": "file",
                    "file": {
                        "filename": filename,
                        "file_data": f"data:application/pdf;base64,{pdf_base64}",
                    },
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

    @staticmethod
    def _from_langchain_tool_call(raw: dict | object) -> ToolCall:
        if isinstance(raw, dict):
            return ToolCall(
                id=str(raw.get("id") or ""),
                name=str(raw.get("name") or ""),
                params=dict(raw.get("args") or {}),
            )
        return ToolCall(
            id=str(getattr(raw, "id", "") or ""),
            name=str(getattr(raw, "name", "") or ""),
            params=dict(getattr(raw, "args", None) or {}),
        )

    def serialize(self) -> BaseMessage:
        text, content = [self.text, self.content]
        contents: str | list[dict | str] | None = text if text is not None else ""
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
                    cls._from_langchain_tool_call(x) for x in (message.tool_calls or [])
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
