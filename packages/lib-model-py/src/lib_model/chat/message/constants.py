from enum import StrEnum

MESSAGE_RESOURCE_NAME = "Message"


class MessageRole(StrEnum):
    ASSISTANT = "assistant"
    SYSTEM = "system"
    TOOL = "tool"
    USER = "user"
