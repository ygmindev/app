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

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        results = await asyncio.gather(*[node.run(params) for node in self.nodes])
        for x in results:
            params = params.update(
                x,
                merge_strategy=MergeStrategy.DEEP_APPEND,
            )
        yield params
