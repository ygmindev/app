# template version: 1.0.0

from typing import AsyncIterable, Awaitable, Callable, cast

from langchain_core.messages import BaseMessageChunk
from langgraph.config import get_stream_writer
from langgraph.graph.state import (
    END,
    START,
    CompiledStateGraph,
    StateGraph,
    StateNode,
)
from lib_shared.core.utils.uninitialized_exception.uninitialized_exception import (
    UninitializedException,
)

from lib_ai.graph.constants import GraphNodeType
from lib_ai.graph.utils.graph_edge.graph_edge import GraphEdge
from lib_ai.graph.utils.graph_node.graph_node import GraphNode

from .directed_acyclic_graph_models import (
    DirectedAcyclicGraphModel,
    TState,
    _DirectedAcyclicGraphModel,
)


class _DirectedAcyclicGraph(
    _DirectedAcyclicGraphModel[TState],
):
    def _wrap_node(
        self,
        node: GraphNode,
    ) -> Callable[[TState], Awaitable[TState]]:
        async def _wrapped(
            state: TState,
        ) -> TState:
            write = get_stream_writer()
            if hasattr(node, "stream") and callable(node.stream):
                final_state = state
                async for chunk in node.stream(state):
                    write(chunk)
                    final_state = chunk
                return final_state

            result = await node.run(state)
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
                cast(StateNode, self._wrap_node(node)),
            )

        edges = self.edges
        if edges:
            first_edge, last_edge = edges[0], edges[-1]
            if first_edge.start != GraphNodeType.START:
                edges.insert(
                    0,
                    GraphEdge(start=GraphNodeType.START, end=first_edge.start),
                )
            if last_edge.end != GraphNodeType.END and not isinstance(
                last_edge.end, Callable
            ):
                edges.append(GraphEdge(start=last_edge.end, end=GraphNodeType.END))

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

    async def stream_message(
        self,
        params: TState,
    ) -> AsyncIterable[str]:
        async for chunk, metadata in self.graph.astream(
            params,
            stream_mode="messages",
        ):
            if hasattr(chunk, "content"):
                chunk = cast(BaseMessageChunk, chunk)
                if chunk.content:
                    yield str(chunk.content)
            elif isinstance(chunk, str) and chunk:
                yield chunk

    async def visualize(
        self,
        filepath: str,
    ) -> None:
        if self._graph is None:
            raise UninitializedException("agent")
        self.graph.get_graph().draw_mermaid_png(output_file_path=filepath)


class DirectedAcyclicGraph(_DirectedAcyclicGraph, DirectedAcyclicGraphModel): ...
