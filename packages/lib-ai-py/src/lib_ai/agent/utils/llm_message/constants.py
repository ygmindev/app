from enum import StrEnum


class LLM_NAME(StrEnum):
    GLM_5 = "glm-5:cloud"
    LLAMA_3_2 = "llama3.2"


class LLM_ROLE(StrEnum):
    ASSISTANT = "assistant"
    SYSTEM = "system"
    TOOL = "tool"
    USER = "user"
