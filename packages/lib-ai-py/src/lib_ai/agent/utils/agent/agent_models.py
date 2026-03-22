# template version: 1.0.0


from typing import AsyncIterable

from lib_ai.model.llm.llm_models import LlmOutput


class _AgentModel:
    async def run(
        self,
        prompt: str,
    ) -> list[LlmOutput]: ...

    async def stream(
        self,
        prompt: str,
    ) -> AsyncIterable[LlmOutput]: ...


class AgentModel(_AgentModel): ...
