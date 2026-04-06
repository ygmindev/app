# template version: 1.0.0


from lib_ai.agent.utils.agent_node import AgentNode
from lib_ai.agent.utils.agent_node.agent_node_models import TState

from .custom_node_models import CustomNodeModel


class CustomNode(AgentNode, CustomNodeModel[TState]): ...
