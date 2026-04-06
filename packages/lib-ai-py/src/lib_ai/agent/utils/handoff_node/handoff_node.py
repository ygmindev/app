# template version: 1.0.0


# from lib_ai.agent.utils.agent import Agent
from typing import Any

from lib_ai.agent.utils.agent_node import AgentNode
from lib_ai.agent.utils.handoff_node.handoff_node_models import HandoffNodeModel


class HandoffNode(HandoffNodeModel, AgentNode):
    agent: Any
