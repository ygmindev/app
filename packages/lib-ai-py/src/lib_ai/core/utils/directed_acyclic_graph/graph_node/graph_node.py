# template version: 1.0.0


from lib_shared.core.utils.base_model import BaseModel

from lib_ai.agent.utils.runnable.runnable import Runnable
from lib_ai.core.utils.directed_acyclic_graph.graph_node.graph_node_models import (
    GraphNodeModel,
)


class GraphNode(
    BaseModel,
    Runnable,
    GraphNodeModel,
):
    name: str
