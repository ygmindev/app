# template version: 1.0.0


from lib_ai.agent.utils.graph_node import GraphNode

from .agent_node_models import AgentNodeModel


class AgentNode(GraphNode, AgentNodeModel): ...
