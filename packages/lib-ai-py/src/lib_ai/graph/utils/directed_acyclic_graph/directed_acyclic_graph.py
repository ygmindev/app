# template version: 1.0.0
from inspect import isawaitable
from typing import Any, AsyncIterable, Awaitable, Callable, Generic, TypeVar, cast
from uuid import uuid4

from langgraph.checkpoint.base import BaseCheckpointSaver
from langgraph.checkpoint.memory import InMemorySaver
from langgraph.config import get_stream_writer
from langgraph.graph.state import (
    END,
    START,
    CompiledStateGraph,
    RunnableConfig,
    StateGraph,
    StateNode,
)
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.logger.logger import logger
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_ai.agent.utils.streamable.streamable import Streamable
from lib_ai.graph.constants import GraphNodeType
from lib_ai.graph.utils.graph_edge.graph_edge import GraphEdge
from lib_ai.graph.utils.graph_node.graph_node import GraphNode

TState = TypeVar("TState", bound=BaseModel)


class _DirectedAcyclicGraph(
    Streamable[TState],
    Generic[TState],
):
    state_type: type[TState] = Field()
    recursion_limit: int = Field(default=25)
    interrupt_before: list[str] = Field(default_factory=list)
    checkpointer: BaseCheckpointSaver | None = Field(default=None)

    _graph: CompiledStateGraph = PrivateField()

    @property
    def nodes(self) -> list[GraphNode]:
        raise NotImplementedError("nodes is not implemented")

    @property
    def edges(self) -> list[GraphEdge]:
        raise NotImplementedError("edges is not implemented")

    def _wrap_node(
        self,
        node: GraphNode,
    ) -> Callable[[TState, RunnableConfig], Awaitable[TState]]:

        async def _wrapped(
            state: TState,
            config: RunnableConfig,
        ) -> TState:
            if node.messages is not None:
                for message in node.messages(state):
                    logger.info(message)

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

    def _run_config(
        self,
        params: TState,
        exec_mode: str,
    ) -> dict[str, Any]:
        thread_id = getattr(params, "thread_id", None) or str(uuid4())
        return {
            "recursion_limit": self.recursion_limit,
            "configurable": {
                "exec_mode": exec_mode,
                "thread_id": thread_id,
            },
        }

    def model_post_init(self, __context: Any) -> None:
        graph = StateGraph(self.state_type)

        for node in self.nodes:
            graph.add_node(
                node.name,
                cast(StateNode, self._wrap_node(node)),
            )

        edges = list(self.edges)
        node_names = [node.name for node in self.nodes]
        has_start = any(edge.start == GraphNodeType.START for edge in edges)
        if not has_start and node_names:
            edges.insert(0, GraphEdge(start=GraphNodeType.START, end=node_names[0]))

        referenced_starts = {
            edge.start for edge in edges if not isinstance(edge.start, Callable)
        }
        has_end = any(
            edge.end == GraphNodeType.END
            or (
                isinstance(edge.end, Callable)
                and edge.mapping is not None
                and GraphNodeType.END in edge.mapping.values()
            )
            for edge in edges
        )
        if not has_end and node_names:
            tails = [
                name
                for name in node_names
                if name not in referenced_starts or name == node_names[-1]
            ]
            if tails:
                edges.append(GraphEdge(start=tails[-1], end=GraphNodeType.END))

        for edge in edges:
            end = edge.end
            if isinstance(end, Callable):
                graph.add_conditional_edges(
                    self._get_node(edge.start),
                    lambda x, end=end: self._get_node(end(x)),
                    None
                    if edge.mapping is None
                    else {
                        self._get_node(k): self._get_node(v)
                        for k, v in edge.mapping.items()
                    },
                )
            else:
                graph.add_edge(
                    self._get_node(edge.start),
                    self._get_node(end),
                )

        self._graph = graph.compile(
            checkpointer=self.checkpointer or InMemorySaver(),
            interrupt_before=self.interrupt_before or None,
        )

    @property
    def graph(self) -> CompiledStateGraph:
        return self._graph

    def _coerce_state(self, params: TState, result: Any) -> TState:
        cls = type(params)
        if isinstance(result, cls):
            return result
        if isinstance(result, dict):
            return cls.model_validate(result)
        return cast(TState, result)

    async def run(
        self,
        params: TState,
    ) -> TState:
        result = await self.graph.ainvoke(
            params,
            config=self._run_config(params, "run"),
        )
        return self._coerce_state(params, result)

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        cls = type(params)

        async for event in self.graph.astream(
            params,
            stream_mode=["custom"],
            subgraphs=True,
            config=self._run_config(params, "stream"),
        ):
            data = event[-1] if isinstance(event, tuple) else event
            if isinstance(data, cls):
                yield data
            elif hasattr(cls, "model_validate") and isinstance(data, dict):
                try:
                    yield cls.model_validate(data)
                except Exception:
                    pass

    async def visualize(
        self,
        filepath: str,
    ) -> None:
        if self._graph is None:
            raise ValueError("Graph is not compiled")
        self.graph.get_graph().draw_mermaid_png(output_file_path=filepath)


class DirectedAcyclicGraph(_DirectedAcyclicGraph): ...
