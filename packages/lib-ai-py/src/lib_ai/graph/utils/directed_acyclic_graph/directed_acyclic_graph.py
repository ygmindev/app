# template version: 1.0.0
from inspect import isawaitable
from typing import AsyncIterable, Awaitable, Callable, Generic, cast

from langgraph.config import get_stream_writer
from langgraph.graph.state import (
    END,
    START,
    CompiledStateGraph,
    RunnableConfig,
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
    Generic[TState],
):
    def _wrap_node(
        self,
        node: GraphNode,
    ) -> Callable[[TState, RunnableConfig], Awaitable[TState]]:

        async def _wrapped(
            state: TState,
            config: RunnableConfig,
        ) -> TState:
            exec_mode = config.get("configurable", {}).get("exec_mode", "run")
            match exec_mode:
                case "stream":
                    writer = get_stream_writer()
                    final_state = state
                    stream = node.stream(state)
                    stream = await stream if isawaitable(stream) else stream
                    async for chunk in stream:
                        if isinstance(chunk, type(state)):
                            final_state = chunk
                        writer(chunk)
                    return final_state
                case _:
                    return await node.run(state)

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
        result = await self.graph.ainvoke(
            params,
            config={"configurable": {"exec_mode": "run"}},
        )
        return cast(TState, result)

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        cls = type(params)

        async for event in self.graph.astream(
            params,
            stream_mode=["updates", "custom"],
            subgraphs=True,
            config={"configurable": {"exec_mode": "stream"}},
        ):
            if len(event) == 3:
                _, mode, data = event
                if mode == "custom":
                    if isinstance(data, cls):
                        yield data
                    elif hasattr(cls, "model_validate") and isinstance(data, dict):
                        yield cls.model_validate(data)
                elif mode == "updates":
                    if isinstance(data, dict):
                        for _, state_update in data.items():
                            if isinstance(state_update, cls):
                                yield state_update
                            elif isinstance(state_update, dict):
                                try:
                                    yield cls.model_validate(state_update)
                                except Exception:
                                    pass
            elif len(event) == 2:
                _, data = event
                if isinstance(data, cls):
                    yield data

    async def visualize(
        self,
        filepath: str,
    ) -> None:
        if self._graph is None:
            raise UninitializedException("agent")
        self.graph.get_graph().draw_mermaid_png(output_file_path=filepath)


class DirectedAcyclicGraph(_DirectedAcyclicGraph, DirectedAcyclicGraphModel): ...
