# template version: 1.0.0


from typing import AsyncIterator, Optional

from lib_ai.agent.utils.ai_message.ai_message import AIMessage
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
        messages: list[AIMessage],
    ) -> Optional[AIMessage]: ...


class LlmModel(_LlmModel): ...
