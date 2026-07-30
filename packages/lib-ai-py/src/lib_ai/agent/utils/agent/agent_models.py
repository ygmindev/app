# template version: 1.0.0


from typing import (
    Generic,
    TypeVar,
)

from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_ai.agent.utils.agent_state import AgentState
from lib_ai.agent.utils.ai_message.ai_message import AIMessage
from lib_ai.agent.utils.skill import Skill
from lib_ai.agent.utils.streamable.streamable_models import StreamableModel
from lib_ai.agent.utils.tool import Tool
from lib_ai.graph.utils.directed_acyclic_graph.directed_acyclic_graph import (
    DirectedAcyclicGraph,
)
from lib_ai.model.llm.llm import Llm

TState = TypeVar("TState", bound=AgentState)


class _AgentModel(
    StreamableModel[TState],
    Generic[TState],
):
    descriptions: list[str] = Field(default_value=list)
    name: str = Field(default="Agent")
    llm: Llm = Field(default_value=Llm)
    initial_state: TState = Field(default_value=AgentState)
    skills: list[Skill] | None = Field(default=None)
    tools: list[Tool] | None = Field(default=None)

    _system_message: AIMessage = PrivateField()
    _graph: DirectedAcyclicGraph | None = PrivateField()


class AgentModel(_AgentModel[TState]): ...
