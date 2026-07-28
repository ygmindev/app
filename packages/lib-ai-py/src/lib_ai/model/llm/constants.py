from enum import StrEnum


class LLM_NAME(StrEnum):
    GEMMA_4_E4B = "google/gemma-4-e4b"
    GLM_5 = "glm-5:cloud"
    LLAMA_3_2 = "llama3.2"
    QWEN_3_5 = "qwen/qwen3.5-9b"
