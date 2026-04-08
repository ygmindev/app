# template version: 1.0.0

from typing import Any, AsyncIterable, Awaitable, Callable, Optional, cast

from langgraph.checkpoint.memory import MemorySaver
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

from lib_ai.agent.utils.graph_node.graph_node import GraphNode

from .directed_acyclic_graph_models import (
    DirectedAcyclicGraphModel,
    GraphEdgeModel,
    GraphNodeType,
    TParams,
    TState,
    _DirectedAcyclicGraphModel,
)


class _DirectedAcyclicGraph(BaseModel, _DirectedAcyclicGraphModel[TState, TParams]):
    state_schema: Any
    nodes: list[GraphNode]
    edges: list[GraphEdgeModel]

    _graph: Optional[StateGraph] = None
    _graph_compiled: Optional[CompiledStateGraph] = None

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

    def _get_edge(self, name: GraphNodeType | str) -> str:
        match name:
            case GraphNodeType.START:
                return START
            case GraphNodeType.END:
                return END
            case _:
                return name

    def post_init(self) -> None:
        self._graph = StateGraph(self.state_schema)
        for node in self.nodes:
            self._graph.add_node(
                node.name,
                cast(StateNode, self._wrap_node(node.handler)),
            )

        for edge in self.edges:
            from_edge, to_edge = edge
            if isinstance(to_edge, str):
                self._graph.add_edge(self._get_edge(from_edge), self._get_edge(to_edge))
            else:
                self._graph.add_conditional_edges(self._get_edge(from_edge), to_edge)

        self._graph_compiled = self._graph.compile(checkpointer=MemorySaver())

    @property
    def graph(self) -> CompiledStateGraph:
        if self._graph_compiled is None:
            raise NotImplementedException("Graph has not been compiled yet.")
        return self._graph_compiled

    async def stream(
        self,
        params: TParams,
    ) -> AsyncIterable[TState]:
        async for result in self.graph.astream(
            params,
            stream_mode="custom",
            config={"configurable": {"thread_id": "conversation_1"}},
        ):
            yield cast(TState, result)

    async def visualize(
        self,
        filename: str = "graph.png",
    ) -> None:
        if self._graph is None:
            raise UninitializedException("agent")
        self.graph.get_graph().draw_mermaid_png(output_file_path=filename)


class DirectedAcyclicGraph(_DirectedAcyclicGraph, DirectedAcyclicGraphModel): ...
