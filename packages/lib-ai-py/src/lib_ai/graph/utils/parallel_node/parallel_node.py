# template version: 1.0.0


import asyncio
from typing import AsyncIterable

from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.merge.constants import MergeStrategy

from lib_ai.agent.utils.streamable.streamable import TState
from lib_ai.graph.utils.graph_node import GraphNode


class ParallelNode(
    GraphNode,
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
