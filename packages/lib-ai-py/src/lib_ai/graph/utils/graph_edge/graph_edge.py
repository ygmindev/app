# template version: 1.0.0


from lib_ai.agent.utils.streamable.streamable_models import TState
from lib_ai.graph.utils.graph_edge.graph_edge_models import (
    GraphEdgeModel,
)


class GraphEdge(
    GraphEdgeModel[TState],
): ...
