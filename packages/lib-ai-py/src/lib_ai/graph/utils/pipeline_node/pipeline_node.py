# template version: 1.0.0


from typing import AsyncIterable

from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_ai.graph.utils.graph_node import GraphNode


class PipelineMode[TState: BaseModel](GraphNode[TState]):
    name: str = "chain"

    @property
    def nodes(self) -> list[GraphNode]:
        raise NotImplementedError("PipelineNode.nodes is not implemented")

    def messages(
        self,
        state: TState,
    ) -> list[str] | None:
        parts = [f"ChainGraphNode({self.name}): {len(self.nodes)} nodes"]
        for node in self.nodes:
            inner = node.messages(state) if node.messages else None
            if inner:
                parts.extend(inner)
        return parts

    def should_retry(self, state: TState) -> bool:
        for node in reversed(self.nodes):
            if node.should_retry(state):
                return True
        return False

    async def run(
        self,
        params: TState,
    ) -> TState:
        state = params
        for node in self.nodes:
            state = await node.run(state)
        return state

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        yield await self.run(params)
