# template version: 1.0.0


from typing import AsyncIterable, Generic, TypeVar

from lib_ai.agent.utils.agent_state.agent_state import AgentState
from lib_ai.agent.utils.runnable.runnable_models import RunnableModel

TState = TypeVar("TState", bound=AgentState)


class _AgentModel(RunnableModel[TState], Generic[TState]):
    async def run_prompt(
        self,
        prompt: str,
    ) -> TState: ...

    async def stream_prompt(
        self,
        prompt: str,
    ) -> AsyncIterable[TState]: ...


class AgentModel(_AgentModel[TState], Generic[TState]): ...
