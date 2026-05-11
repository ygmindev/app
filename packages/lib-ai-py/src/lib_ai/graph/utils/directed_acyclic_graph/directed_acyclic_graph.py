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

from lib_ai.graph.utils.graph_node import GraphNode

from .directed_acyclic_graph_models import (
    DirectedAcyclicGraphModel,
    GraphEdgeModel,
    GraphNodeType,
    TState,
    _DirectedAcyclicGraphModel,
)


class _DirectedAcyclicGraph(BaseModel, _DirectedAcyclicGraphModel[TState]):
    initial_state: TState
    nodes: list[GraphNode]
    edges: list[GraphEdgeModel]

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
        if len(edges):
            if edges[0][0] != GraphNodeType.START:
                edges.insert(0, (GraphNodeType.START, self._get_node(edges[0][0])))

        for edge in edges:
            if len(edge) == 2:
                from_edge, to_edge = edge
                graph.add_edge(
                    self._get_node(from_edge),
                    self._get_node(to_edge),
                )
            else:
                from_edge, to_edge, edge_map = edge
                graph.add_conditional_edges(
                    self._get_node(from_edge),
                    lambda x, to_edge=to_edge: self._get_node(to_edge(x)),
                    {
                        k: self._get_node(v)
                        for k, v in (
                            edge_map.items() if isinstance(edge_map, dict) else edge_map
                        )
                    },
                )

        if len(edges):
            if len(edges[-1]) == 2 and edges[-1][-1] != GraphNodeType.END:
                edges.append((self._get_node(edges[-1][-1]), GraphNodeType.END))

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
