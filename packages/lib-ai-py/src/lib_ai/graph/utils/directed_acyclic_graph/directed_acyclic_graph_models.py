# template version: 1.0.0

from typing import TypeVar

from langgraph.graph.state import (
    CompiledStateGraph,
)
from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_ai.agent.utils.streamable.streamable_models import StreamableModel
from lib_ai.graph.utils.graph_edge.graph_edge import GraphEdge
from lib_ai.graph.utils.graph_node import GraphNode

TState = TypeVar("TState", bound=BaseModel)


class _DirectedAcyclicGraphModel(
    StreamableModel[TState],
):
    initial_state: TState = Field()
    nodes: list[GraphNode] = Field(default_factory=list)
    edges: list[GraphEdge] = Field(default_factory=list)

    _graph: CompiledStateGraph = PrivateField()

    async def visualize(
        self,
        filepath: str,
    ) -> None: ...


class DirectedAcyclicGraphModel(_DirectedAcyclicGraphModel): ...
