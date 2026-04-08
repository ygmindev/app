# template version: 1.0.0


from typing import AsyncIterable, Generic, TypeVar

from lib_shared.core.utils.base_model import BaseModel

from lib_ai.agent.utils.llm_message import LlmMessage


class AgentState(BaseModel):
    messages: list[LlmMessage] = []


TState = TypeVar("TState", bound=AgentState)


class _AgentModel(Generic[TState]):
    async def run(
        self,
        prompt: str,
    ) -> list[LlmMessage]: ...

    async def stream(
        self,
        prompt: str,
    ) -> AsyncIterable[LlmMessage]: ...


class AgentModel(_AgentModel[TState]): ...
