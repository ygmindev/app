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

    def _inner_state(
        self,
        params: TState,
    ) -> TState:
        if not self.prompt:
            return params
        extra = AIMessage(role=MessageRole.USER, text=self.prompt)
        return params.clone(messages=list(params.messages) + [extra])

    async def run(
        self,
        params: TState,
    ) -> TState:
        inner = self._inner_state(params)
        result = await self.agent.run(inner)
        new_messages = list(result.messages[len(params.messages) :])
        return params.event(messages=new_messages)

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        inner = self._inner_state(params)
        new_messages: list[AIMessage] = []
        async for chunk in self.agent.graph.stream(inner):
            if getattr(chunk, "delta", None):
                yield params.event(delta=chunk.delta)
            elif getattr(chunk, "messages", None):
                new_messages.extend(chunk.messages)
        yield params.event(messages=new_messages)
