# template version: 1.0.0


from typing import Iterator

from lib_ai.agent.utils.llm_message import LlmMessage
from lib_ai.agent.utils.tool import Tool


class _LlmModel:
    def bind_tools(
        self,
        tools: list[Tool],
    ) -> None: ...

    async def invoke(
        self,
        messages: list[LlmMessage],
    ) -> LlmMessage: ...

    async def stream(
        self,
        messages: list[LlmMessage],
    ) -> Iterator[LlmMessage]: ...


class LlmModel(_LlmModel): ...
