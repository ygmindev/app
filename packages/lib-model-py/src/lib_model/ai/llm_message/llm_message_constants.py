from enum import StrEnum

LLM_MESSAGE_RESOURCE_NAME = "llm_message"


class LlmMessageRole(StrEnum):
    ASSISTANT = "assistant"
    SYSTEM = "system"
    TOOL = "tool"
    USER = "user"
