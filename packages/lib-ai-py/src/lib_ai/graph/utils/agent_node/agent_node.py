# template version: 1.0.0


from typing import AsyncIterable, TypeVar

from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.agent.agent import Agent
from lib_ai.agent.utils.agent_state import AgentState
from lib_ai.agent.utils.ai_message.ai_message import AIMessage
from lib_ai.agent.utils.ai_message.constants import MessageRole
from lib_ai.graph.utils.graph_node import GraphNode

TState = TypeVar("TState", bound=AgentState)


class AgentNode(
    GraphNode,
):
    agent: Agent = Field()
    prompt: str | None = Field(default=None)

    def _prepare(
        self,
        params: TState,
    ) -> TState:
        if self.prompt:
            params = params.clone(
                messages=params.messages
                + [AIMessage(role=MessageRole.USER, content=self.prompt)]
            )
        elif params.messages:
            last_message = params.messages[-1]
            if last_message.role != MessageRole.USER:
                params = params.clone(
                    messages=params.messages
                    + [AIMessage(role=MessageRole.USER, content=last_message.content)]
                )
        return params

    async def run(
        self,
        params: TState,
    ) -> TState:
        params = self._prepare(params)
        return await self.agent.run(params)

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        params = self._prepare(params)
        async for x in self.agent.stream(params):
            yield x
