# template version: 1.0.0


# from lib_ai.agent.utils.agent import Agent
from typing import Any, Callable, Optional

from lib_ai.agent.utils.agent_node import AgentNode
from lib_ai.agent.utils.llm_message import LlmMessage
from lib_ai.agent.utils.parallel_node.parallel_node_models import (
    ParallelNodeModel,
)


class ParallelNode(ParallelNodeModel, AgentNode):
    agents: list[Any]
    aggregator: Optional[Callable[[list[LlmMessage]], str]] = None
