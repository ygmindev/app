# template version: 1.0.0


from typing import Callable

from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.streamable.streamable_models import TState
from lib_ai.graph.constants import GraphNodeType
from lib_ai.graph.utils.graph_edge.graph_edge_models import (
    GraphEdgeModel,
)


class GraphEdge(
    BaseModel,
    GraphEdgeModel[TState],
):
    start: GraphNodeType | str = Field()
    end: GraphNodeType | str | Callable[[TState], str] = Field()
    mapping: dict[str, GraphNodeType | str] = Field(default=None)
