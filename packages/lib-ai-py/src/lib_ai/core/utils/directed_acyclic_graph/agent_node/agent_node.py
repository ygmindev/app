# template version: 1.0.0


from typing import AsyncIterable

from lib_ai.agent.utils.agent import Agent
from lib_ai.core.utils.directed_acyclic_graph.graph_node import GraphNode

from .agent_node_models import AgentNodeModel, TState


class AgentNode(GraphNode, AgentNodeModel):
    agent: Agent

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        async for x in self.agent.stream(params):
            yield x
