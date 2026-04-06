# template version: 1.0.0


# from lib_ai.agent.utils.agent import Agent
from typing import Any, Optional

from lib_ai.agent.utils.agent_node import AgentNode
from lib_ai.agent.utils.swarm_node.swarm_node_models import (
    SwarmNodeModel,
)


class SwarmNode(SwarmNodeModel, AgentNode):
    agents: list[Any]
    entry_agent: Optional[str] = None
