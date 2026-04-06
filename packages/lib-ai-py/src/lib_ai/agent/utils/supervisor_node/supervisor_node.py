# template version: 1.0.0


# from lib_ai.agent.utils.agent import Agent
from typing import Any

from lib_ai.agent.utils.agent_node import AgentNode
from lib_ai.agent.utils.supervisor_node.supervisor_node_models import (
    SupervisorNodeModel,
)


class SupervisorNode(SupervisorNodeModel, AgentNode):
    agents: list[Any]
    finish_token: str
