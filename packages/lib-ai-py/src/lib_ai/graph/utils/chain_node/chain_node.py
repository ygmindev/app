# template version: 1.0.0


from typing import AsyncIterable

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.graph.utils.graph_node import GraphNode


class ChainNode[TState: BaseModel](GraphNode[TState]):
    name: str = "chain"
    nodes: list[GraphNode] = Field(default_factory=list)

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
