# template version: 1.0.0

import asyncio
from inspect import isawaitable
from typing import (
    Any,
    AsyncIterable,
    Generic,
    TypeVar,
)

from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_ai.agent.utils.agent_state import AgentState
from lib_ai.agent.utils.ai_message.ai_message import AIMessage
from lib_ai.agent.utils.ai_message.constants import MessageRole
from lib_ai.agent.utils.skill import Skill
from lib_ai.agent.utils.streamable.streamable import Streamable
from lib_ai.agent.utils.tool import Tool
from lib_ai.graph.constants import GraphNodeType
from lib_ai.graph.utils.directed_acyclic_graph.directed_acyclic_graph import (
    DirectedAcyclicGraph,
)
from lib_ai.graph.utils.graph_edge.graph_edge import GraphEdge
from lib_ai.graph.utils.graph_node.graph_node import GraphNode
from lib_ai.model.llm.llm import Llm

TState = TypeVar("TState", bound=AgentState)


class _Agent(
    Streamable[TState],
    Generic[TState],
):
    descriptions: list[str] = Field(default_factory=list)
    name: str = Field(default="Agent")
    llm: Llm = Field(default_factory=Llm)
    initial_state: TState = Field(default_factory=AgentState)  # type: ignore[assignment]
    skills: list[Skill] | None = Field(default=None)
    tools: list[Tool] | None = Field(default=None)
    max_tool_rounds: int = Field(default=10)
    interrupt_before_tools: bool = Field(default=False)

    _system_message: AIMessage = PrivateField()
    _graph: DirectedAcyclicGraph | None = PrivateField(default=None)

    def model_post_init(self, __context: Any) -> None:
        tool_map: dict[str, Tool] = {}
        nodes: list[GraphNode] = []
        edges: list[GraphEdge] = []
        descriptions: list[str] = [x.strip() for x in self.descriptions]
        max_tool_rounds = self.max_tool_rounds

        if self.skills:
            descriptions += [
                "### SKILL USAGE RULES",
                "Identify which Skill is most relevant to the user's request before acting",
            ]
            for skill in self.skills or []:
                descriptions += [
                    "-" * 10,
                    *skill.descriptions,
                ]
                tool_map.update({tool.name: tool for tool in skill.tools})

        if self.tools:
            descriptions += [
                "### TOOL USAGE RULES",
                "Always prefer using a tool over guessing",
            ]
            for tool in self.tools or []:
                descriptions += [
                    f"- '{tool.name}': {tool.description}",
                ]
                tool_map.update({tool.name: tool})

        if tool_map:
            self.llm.bind_tools(list(tool_map.values()))

        system_prompt = "\n".join(descriptions)
        system_message = AIMessage(
            role=MessageRole.SYSTEM,
            text=system_prompt,
        )
        self._system_message = system_message

        llm = self.llm

        class _LlmNode(GraphNode):
            name: str = "llm"

            async def run(
                self,
                params: TState,
            ) -> TState:
                result = await llm.run([system_message] + list(params.messages))
                if result is None:
                    return params.event(messages=[])
                return params.event(messages=[result])

            async def stream(
                self,
                params: TState,
            ) -> AsyncIterable[TState]:
                stream = llm.stream([system_message] + list(params.messages))
                stream = await stream if isawaitable(stream) else stream
                final: AIMessage | None = None
                async for chunk in stream:
                    if chunk.delta:
                        yield params.event(delta=chunk.delta)
                    if chunk.message is not None:
                        final = chunk.message
                if final is not None:
                    yield params.event(messages=[final])
                elif final is None:
                    yield params.event(messages=[])

        edges.append(GraphEdge(start=GraphNodeType.START, end="llm"))
        nodes.append(_LlmNode())

        class _ToolsNode(GraphNode):
            name: str = "tools"

            async def run(
                self,
                params: TState,
            ) -> TState:
                if not params.messages:
                    return params.event(messages=[])
                last_message = params.messages[-1]
                if (
                    last_message.role != MessageRole.ASSISTANT
                    or not last_message.tool_calls
                ):
                    return params.event(messages=[])

                async def _run(tool_call: ToolCall) -> AIMessage:
                    tool = tool_map.get(tool_call.name)
                    if tool is None:
                        return AIMessage(
                            role=MessageRole.TOOL,
                            text=f"Unknown tool: {tool_call.name}",
                            current_tool_call=tool_call,
                        )
                    if tool.requires_approval:
                        decision = interrupt(
                            {
                                "type": "tool_approval",
                                "name": tool_call.name,
                                "params": tool_call.params,
                            }
                        )
                        if decision in (False, "reject", "denied"):
                            return AIMessage(
                                role=MessageRole.TOOL,
                                text="Tool execution rejected",
                                current_tool_call=tool_call,
                            )
                    try:
                        result = await tool.invoke_args(tool_call.params)
                    except (ValidationError, TypeError, ValueError) as exc:
                        return AIMessage(
                            role=MessageRole.TOOL,
                            text=f"Tool '{tool_call.name}' failed: {exc}",
                            current_tool_call=tool_call,
                        )
                    except Exception as exc:
                        return AIMessage(
                            role=MessageRole.TOOL,
                            text=(
                                f"Tool '{tool_call.name}' failed: {type(exc).__name__}"
                            ),
                            current_tool_call=tool_call,
                        )
                    return AIMessage(
                        role=MessageRole.TOOL,
                        text=str(result),
                        current_tool_call=tool_call,
                    )

                updates = await asyncio.gather(
                    *(_run(tc) for tc in last_message.tool_calls)
                )
                return params.event(
                    messages=list(updates),
                    tool_round=params.tool_round + 1,
                )

        def _llm_route(state: TState) -> str:
            if state.tool_round >= max_tool_rounds:
                return GraphNodeType.END
            messages = state.messages
            if messages:
                last = messages[-1]
                if last.role == MessageRole.ASSISTANT and last.tool_calls:
                    return "tools"
            return GraphNodeType.END

        if tool_map:
            nodes.append(_ToolsNode())
            edges.append(GraphEdge(start="tools", end="llm"))
            edges.append(
                GraphEdge(
                    start="llm",
                    end=_llm_route,
                    mapping={"tools": "tools", GraphNodeType.END: GraphNodeType.END},
                )
            )
        else:
            edges.append(GraphEdge(start="llm", end=GraphNodeType.END))

        self._graph = DirectedAcyclicGraph(
            initial_state=self.initial_state,
            nodes=nodes,
            edges=edges,
            recursion_limit=max(25, max_tool_rounds * 2 + 5),
            interrupt_before=["tools"] if self.interrupt_before_tools else [],
        )

    @property
    def graph(self) -> DirectedAcyclicGraph:
        if self._graph is None:
            raise NotImplementedError("Graph is not initialized")
        return self._graph

    async def run(
        self,
        params: TState,
    ) -> TState:
        return await self.graph.run(params)

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        async for updates in self.graph.stream(params):
            if getattr(updates, "delta", None):
                yield updates


class Agent(_Agent[TState]): ...
