from enum import Enum


class LLM_NAME(str, Enum):
    GLM_5 = "glm-5:cloud"
    LLAMA_3_2 = "llama3.2"


class LLM_MESSAGE_TYPE(str, Enum):
    SYSTEM = "system"
    USER = "user"
