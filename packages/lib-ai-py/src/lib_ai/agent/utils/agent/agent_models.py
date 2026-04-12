# template version: 1.0.0


from typing import AsyncIterable, TypeVar

from lib_shared.core.utils.base_model import BaseModel

from lib_ai.agent.utils.llm_message import LlmMessage
from lib_ai.agent.utils.runnable.runnable_models import RunnableModel


class AgentState(BaseModel):
    messages: list[LlmMessage] = []


TState = TypeVar("TState", bound=AgentState)


class _AgentModel(RunnableModel[TState]):
    async def run_prompt(
        self,
        prompt: str,
    ) -> TState: ...

    async def stream_prompt(
        self,
        prompt: str,
    ) -> AsyncIterable[TState]: ...


class AgentModel(_AgentModel[TState]): ...
