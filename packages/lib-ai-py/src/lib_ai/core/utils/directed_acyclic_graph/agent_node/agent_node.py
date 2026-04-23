# template version: 1.0.0


from typing import AsyncIterable, Optional

from lib_ai.agent.utils.agent import Agent
from lib_ai.agent.utils.agent.agent import LLM_ROLE
from lib_ai.agent.utils.llm_message import LlmMessage
from lib_ai.core.utils.directed_acyclic_graph.graph_node import GraphNode

from .agent_node_models import AgentNodeModel, TState


class AgentNode(GraphNode, AgentNodeModel):
    agent: Agent
    prompt: Optional[str] = None

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        if self.prompt:
            params.messages.append(LlmMessage(role=LLM_ROLE.USER, message=self.prompt))
        else:
            last_message = params.messages[-1]
            if last_message and last_message.role != LLM_ROLE.USER:
                last_message.role = LLM_ROLE.USER
        async for x in self.agent.stream(params):
            yield x
