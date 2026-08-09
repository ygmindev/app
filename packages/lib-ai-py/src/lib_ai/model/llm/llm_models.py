# template version: 1.0.0


from typing import AsyncIterator

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.get_env.get_env import get_env

from lib_ai.agent.utils.ai_message.ai_message import AIMessage
from lib_ai.agent.utils.tool import Tool
from lib_ai.model.llm.constants import LLM_NAME, LLM_PROVIDER


class _LlmModel(BaseModel):
    provider: str = Field(default=LLM_PROVIDER.OPENROUTER)
    name: str = Field(default=LLM_NAME.GEMMA_4_31B_FREE)
    temperature: float = Field(default=0.0)
    max_tokens: int = Field(default=4096)
    output_schema: BaseModel | None = Field(default=None)
    secrets: dict[str, str] = Field(
        default={
            LLM_PROVIDER.OPENROUTER: get_env("SERVER_APP_OPENROUTER_SECRET"),
        }
    )

    def bind_tools(
        self,
        tools: list[Tool],
    ) -> None: ...

    def n_tokens(
        self,
        messages: list[AIMessage],
    ) -> int: ...

    async def stream(
        self,
        messages: list[AIMessage],
    ) -> AsyncIterator[str]: ...

    async def stream_prompt(
        self,
        prompt: str,
    ) -> AsyncIterator[str]: ...

    async def run(
        self,
        messages: list[AIMessage],
    ) -> AIMessage | None: ...


class LlmModel(_LlmModel): ...
