# template version: 1.0.0


from typing import TypeVar

from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.agent.agent import Agent
from lib_ai.agent.utils.agent_state import AgentState
from lib_ai.graph.utils.graph_node.graph_node_models import (
    GraphNodeModel,
)

TState = TypeVar("TState", bound=AgentState)


class AgentNodeModel(GraphNodeModel[TState]):
    agent: Agent = Field()
    prompt: str | None = Field(default=None)
