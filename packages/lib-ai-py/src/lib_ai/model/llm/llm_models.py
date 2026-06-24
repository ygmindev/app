# template version: 1.0.0


from typing import AsyncIterator, Optional

from lib_ai.agent.utils.llm_message import LlmMessage
from lib_ai.agent.utils.tool import Tool


class _LlmModel:
    def bind_tools(
        self,
        tools: list[Tool],
    ) -> None: ...

    async def stream_message(
        self,
        prompt: str,
    ) -> AsyncIterator[str]: ...

    async def run(
        self,
        messages: list[LlmMessage],
    ) -> Optional[LlmMessage]: ...


class LlmModel(_LlmModel): ...
