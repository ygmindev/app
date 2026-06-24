# template version: 1.0.0


from typing import Generic, TypeVar

from lib_ai.agent.utils.agent_state.agent_state import AgentState
from lib_ai.agent.utils.streamable.streamable_models import StreamableModel

TState = TypeVar("TState", bound=AgentState)


class _AgentModel(
    StreamableModel[TState],
    Generic[TState],
): ...


class AgentModel(_AgentModel[TState]): ...
