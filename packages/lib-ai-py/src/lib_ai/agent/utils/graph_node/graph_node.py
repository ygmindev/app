# template version: 1.0.0


from collections.abc import Awaitable, Callable

from lib_shared.core.utils.base_model import BaseModel

from .graph_node_models import GraphNodeModel, TState


class GraphNode(BaseModel, GraphNodeModel[TState]):
    name: str
    handler: Callable[[TState], Awaitable[TState]]
    max_iter: int = 3
