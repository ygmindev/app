from enum import StrEnum


class LLM_PROVIDER(StrEnum):
    LMSTUDIO = "lmstudio"
    OPENROUTER = "openrouter"


class LLM_NAME(StrEnum):
    GEMMA_4_E4B = "google/gemma-4-e4b"
    GEMMA_4_31B_FREE = "google/gemma-4-31b-it:free"
    GLM_5 = "glm-5:cloud"
    LLAMA_3_2 = "llama3.2"
    QWEN_3_5 = "qwen/qwen3.5-9b"
    NEMOTRON_3 = "nvidia/nemotron-3-ultra-550b-a55b:free"
