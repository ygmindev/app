# template version: 1.0.0


from lib_shared.core.utils.field.field import Field

from lib_ai.graph.utils.graph_node.graph_node import GraphNode
from lib_ai.graph.utils.graph_node.graph_node_models import (
    GraphNodeModel,
)


class ParallelNodeModel(
    GraphNodeModel,
):
    nodes: list[GraphNode] = Field(default_value=list)
