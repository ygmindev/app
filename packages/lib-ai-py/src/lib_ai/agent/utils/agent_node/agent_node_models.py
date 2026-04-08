# template version: 1.0.0


from typing import TypeVar

from lib_ai.agent.utils.agent_state import AgentState
from lib_ai.agent.utils.graph_node.graph_node_models import GraphNodeModel

TState = TypeVar("TState", bound=AgentState)


class AgentNodeModel(GraphNodeModel[TState]): ...
