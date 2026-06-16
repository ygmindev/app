from enum import StrEnum

MESSAGE_RESOURCE_NAME = "Message"


class MessageRole(StrEnum):
    USER = "user"
    SYSTEM = "system"
