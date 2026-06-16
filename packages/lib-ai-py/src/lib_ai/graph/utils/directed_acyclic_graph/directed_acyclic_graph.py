# template version: 1.0.0

from typing import AsyncIterable, Awaitable, Callable, Optional, cast

from langgraph.config import get_stream_writer
from langgraph.graph.state import (
    END,
    START,
    CompiledStateGraph,
    StateGraph,
    StateNode,
)
from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.not_implemented_exception import NotImplementedException
from lib_shared.core.utils.uninitialized_exception.uninitialized_exception import (
    UninitializedException,
)

from lib_ai.graph.constants import GraphNodeType
from lib_ai.graph.utils.graph_edge.graph_edge import GraphEdge
from lib_ai.graph.utils.graph_node import GraphNode

from .directed_acyclic_graph_models import (
    DirectedAcyclicGraphModel,
    TState,
    _DirectedAcyclicGraphModel,
)


class _DirectedAcyclicGraph(BaseModel, _DirectedAcyclicGraphModel[TState]):
    initial_state: TState
    nodes: list[GraphNode]
    edges: list[GraphEdge]

    _graph: Optional[CompiledStateGraph] = None

    def _wrap_node(
        self,
        handler: Callable[[TState], Awaitable[TState]],
    ) -> Callable[[TState], Awaitable[TState]]:
        async def _wrapped(
            state: TState,
        ) -> TState:
            write = get_stream_writer()
            result = await handler(state)
            write(result)
            return result

        return _wrapped

    @staticmethod
    def _get_node(name: GraphNodeType | str) -> str:
        match name:
            case GraphNodeType.START:
                return START
            case GraphNodeType.END:
                return END
            case _:
                return name

    def post_init(self) -> None:
        graph = StateGraph(type(self.initial_state))

        for node in self.nodes:
            graph.add_node(
                node.name,
                cast(StateNode, self._wrap_node(node.run)),
            )

        edges = self.edges

        for edge in edges:
            end = edge.end
            if isinstance(end, Callable):
                graph.add_conditional_edges(
                    self._get_node(edge.start),
                    lambda x, end=end: self._get_node(end(x)),
                    {
                        self._get_node(k): self._get_node(v)
                        for k, v in edge.mapping.items() or {}
                    },
                )
            else:
                graph.add_edge(
                    self._get_node(edge.start),
                    self._get_node(end),
                )

        # self._graph = graph.compile(checkpointer=MemorySaver())
        self._graph = graph.compile()

    @property
    def graph(self) -> CompiledStateGraph:
        if self._graph is None:
            raise NotImplementedException("Graph has not been compiled yet.")
        return self._graph

    async def run(
        self,
        params: TState,
    ) -> TState:
        result = await self.graph.ainvoke(params)
        return cast(TState, result)

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        cls = type(params)
        async for result in self.graph.astream(
            params,
            stream_mode="custom",
        ):
            if isinstance(result, dict):
                yield cls.model_validate(result)
            else:
                yield cast(TState, result)

    async def visualize(
        self,
        filepath: str,
    ) -> None:
        if self._graph is None:
            raise UninitializedException("agent")
        self.graph.get_graph().draw_mermaid_png(output_file_path=filepath)


class DirectedAcyclicGraph(_DirectedAcyclicGraph, DirectedAcyclicGraphModel): ...
