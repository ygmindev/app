# template version: 1.0.0

import asyncio
from inspect import isawaitable
from typing import (
    AsyncIterable,
    Dict,
    cast,
)

from lib_shared.core.utils.not_implemented_exception import NotImplementedException

from lib_ai.agent.utils.ai_message.ai_message import AIMessage
from lib_ai.agent.utils.ai_message.constants import MessageRole
from lib_ai.agent.utils.tool import Tool
from lib_ai.graph.constants import GraphNodeType
from lib_ai.graph.utils.directed_acyclic_graph.directed_acyclic_graph import (
    DirectedAcyclicGraph,
)
from lib_ai.graph.utils.graph_edge.graph_edge import GraphEdge
from lib_ai.graph.utils.graph_node.graph_node import GraphNode

from .agent_models import AgentModel, TState, _AgentModel


class _Agent(_AgentModel[TState]):
    def post_init(self) -> None:
        tool_map: Dict[str, Tool] = {}
        nodes: list[GraphNode] = []
        edges: list[GraphEdge] = []
        descriptions: list[str] = [x.strip() for x in self.descriptions]

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
                    f"- '{tool.name}': {'. '.join(tool.description)}",
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
                result = await llm.run([system_message] + params.messages)
                if result is not None:
                    params.messages.append(result)
                return params

            async def stream(
                self,
                params: TState,
            ) -> AsyncIterable[TState]:
                stream = llm.stream([system_message] + params.messages)
                stream = await stream if isawaitable(stream) else stream

                message = AIMessage(role=MessageRole.ASSISTANT)
                params.messages.append(message)

                buffer = ""
                async for chunk in stream:
                    delta = str(chunk)
                    buffer += delta
                    message.text = buffer
                    yield params.clone(delta=delta)

                yield params

        edges.append(GraphEdge(start=GraphNodeType.START, end="llm"))
        nodes.append(_LlmNode())

        class _ToolsNode(GraphNode):
            name: str = "tools"

            async def run(
                self,
                params: TState,
            ) -> TState:
                last_message = params.messages[-1]
                if (
                    last_message.role == MessageRole.ASSISTANT
                    and last_message.tool_calls
                ):

                    async def _run(tool_call) -> AIMessage:
                        tool = tool_map[tool_call.name]
                        result = await tool.execute(tool_call.params)
                        return AIMessage(
                            role=MessageRole.TOOL,
                            text=result,
                            current_tool_call=tool_call,
                        )

                    updates = await asyncio.gather(
                        *(_run(tc) for tc in last_message.tool_calls)
                    )
                    params.messages.extend(updates)
                return params

        def _llm_route(state: TState) -> str:
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
        )

    @property
    def graph(self) -> DirectedAcyclicGraph:
        if self._graph is None:
            raise NotImplementedException("Graph is not initialized")
        return self._graph

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        start = len(params.messages)
        async for updates in self.graph.stream(params):
            delta = getattr(updates, "delta", None)
            if delta:
                yield params.clone(delta=delta)
            else:
                messages = cast(list[AIMessage], updates.messages)[start:]
                text: str = ""
                for message in messages:
                    if message.text is not None:
                        text += message.text
                    if message.role == MessageRole.ASSISTANT and message.tool_calls:
                        for tool_call in message.tool_calls:
                            text += f"calling tool: {tool_call.name} with args: {tool_call.params}"

                if text:
                    yield params.clone(
                        messages=[
                            AIMessage(
                                role=MessageRole.ASSISTANT,
                                text=text,
                            )
                        ]
                    )


class Agent(
    _Agent[TState],
    AgentModel,
): ...
