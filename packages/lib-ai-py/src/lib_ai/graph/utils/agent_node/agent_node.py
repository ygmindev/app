# template version: 1.0.0


from typing import AsyncIterable, Optional

from lib_model.chat.message.constants import MessageRole

from lib_ai.agent.utils.agent import Agent
from lib_ai.agent.utils.llm_message import LlmMessage
from lib_ai.graph.utils.graph_node import GraphNode

from .agent_node_models import AgentNodeModel, TState


class AgentNode(GraphNode, AgentNodeModel):
    agent: Agent
    prompt: Optional[str] = None

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        if self.prompt:
            params.messages.append(
                LlmMessage(
                    role=MessageRole.USER,
                    content=self.prompt,
                )
            )
        else:
            last_message = params.messages[-1]
            if last_message and last_message.role != MessageRole.USER:
                last_message.role = MessageRole.USER
        async for x in self.agent.stream(params):
            yield x
