# template version: 1.0.0


from lib_shared.core.utils.base_model import BaseModel

from lib_ai.agent.utils.graph_node.graph_node_models import GraphNodeModel
from lib_ai.agent.utils.runnable.runnable import Runnable


class GraphNode(BaseModel, Runnable, GraphNodeModel):
    name: str
