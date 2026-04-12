# template version: 1.0.0


import asyncio
from typing import AsyncIterable

from lib_shared.core.utils.merge.merge_models import MergeStrategy

from lib_ai.agent.utils.runnable.runnable_models import TState
from lib_ai.core.utils.directed_acyclic_graph.graph_node import GraphNode

from .parallel_node_models import ParallelNodeModel


class ParallelNode(GraphNode, ParallelNodeModel):
    nodes: list[GraphNode]

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        results = await asyncio.gather(*[node.run(params) for node in self.nodes])
        for x in results:
            params = params.update(x, merge_strategy=MergeStrategy.DEEP_APPEND)
        yield params
