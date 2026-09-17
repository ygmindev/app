from enum import StrEnum


class LLM_PROVIDER(StrEnum):
    LMSTUDIO = "lmstudio"
    OPENROUTER = "openrouter"
    LITELLM = "litellm"


class LLM_NAME(StrEnum):
    GEMMA_4_E4B = "GEMMA_4_E4B"
    GEMMA_4_31B_FREE = "GEMMA_4_31B_FREE"
    GEMMA_4_26B_A4B_FREE = "GEMMA_4_26B_A4B_FREE"
    LFM_2_5_FREE = "LFM_2_5_FREE"
    GLM_5 = "GLM_5"
    LLAMA_3_2 = "LLAMA_3_2"
    QWEN_3_5 = "QWEN_3_5"
    NEMOTRON_3_5_LIGHTNING = "NEMOTRON_3_5_LIGHTNING"
    NEMOTRON_3_SUPER = "NEMOTRON_3_SUPER"
    GPT_4_0_MINI = "GPT_4_0_MINI"


LLM_PROVIDER_MODEL = {
    LLM_PROVIDER.LITELLM: {
        LLM_NAME.GPT_4_0_MINI: "gpt-4o-mini",
    },
    LLM_PROVIDER.OPENROUTER: {
        LLM_NAME.GEMMA_4_E4B: "google/gemma-4-e4b",
        LLM_NAME.GEMMA_4_31B_FREE: "google/gemma-4-31b-it:free",
        LLM_NAME.GEMMA_4_26B_A4B_FREE: "google/gemma-4-26b-a4b-it:free",
        LLM_NAME.LFM_2_5_FREE: "liquid/lfm-2.5-2.6b:free",
        LLM_NAME.GLM_5: "glm-5:cloud",
        LLM_NAME.LLAMA_3_2: "llama3.2",
        LLM_NAME.QWEN_3_5: "qwen/qwen3.5-9b",
        LLM_NAME.NEMOTRON_3_5_LIGHTNING: "nvidia/nemotron-3.5-lightning:free",
        LLM_NAME.NEMOTRON_3_SUPER: "nvidia/nemotron-3-super-120b-a12b:free",
    },
}
