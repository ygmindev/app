# template version: 1.0.0


from typing import AsyncIterator

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.ai_message.ai_message import AIMessage
from lib_ai.agent.utils.tool import Tool
from lib_ai.model.llm.constants import LLM_NAME


class _LlmModel(BaseModel):
    name: str = Field(default=LLM_NAME.QWEN_3_5)
    temperature: float = Field(default=0.0)
    max_tokens: int = Field(default=4096)
    output_schema: BaseModel | None = Field(default=None)

    def bind_tools(
        self,
        tools: list[Tool],
    ) -> None: ...

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
