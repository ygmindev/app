# template version: 1.0.0


import asyncio
from typing import AsyncIterable

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.ai_message.ai_message import AIMessage
from lib_ai.graph.utils.graph_node import GraphNode


class ParallelNode[TState: BaseModel](
    GraphNode[TState],
):
    nodes: list[GraphNode] = Field(default_factory=list)

    async def run(
        self,
        params: TState,
    ) -> TState:
        copies = [params.clone() for _ in self.nodes]
        results = await asyncio.gather(
            *[node.run(copy) for node, copy in zip(self.nodes, copies, strict=True)]
        )
        messages: list[AIMessage] = []
        for result in results:
            incoming = getattr(result, "messages", None)
            if incoming:
                messages.extend(incoming)
        if hasattr(params, "event"):
            return params.event(messages=messages)
        return params.clone(messages=messages)

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        yield await self.run(params)
