# template version: 1.0.0

from typing import (
    AsyncIterable,
    Dict,
    Optional,
    cast,
)

from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.not_found_exception import NotFoundException
from lib_shared.core.utils.not_implemented_exception import NotImplementedException

from lib_ai.agent.utils.directed_acyclic_graph import DirectedAcyclicGraph
from lib_ai.agent.utils.directed_acyclic_graph.directed_acyclic_graph_models import (
    GraphEdgeModel,
    GraphNodeType,
)
from lib_ai.agent.utils.graph_node import GraphNode
from lib_ai.agent.utils.llm_message import LlmMessage
from lib_ai.agent.utils.llm_message.constants import LLM_ROLE
from lib_ai.agent.utils.skill import Skill
from lib_ai.agent.utils.tool import Tool
from lib_ai.model.llm import Llm

from .agent_models import AgentModel, TState, _AgentModel


class _Agent(BaseModel, _AgentModel[TState]):
    descriptions: list[str]
    llm: Llm
    name: str
    initial_state: TState
    skills: Optional[list[Skill]] = None

    _graph: Optional[DirectedAcyclicGraph] = None

    def post_init(self) -> None:
        tools: Dict[str, Tool] = {}
        nodes: list[GraphNode] = []
        edges: list[GraphEdgeModel] = []

        descriptions: list[str] = [x.strip() for x in self.descriptions]
        if self.skills:
            descriptions += ["You MUST follow the protocols below for each skill:"]
            for skill in self.skills or []:
                descriptions += [
                    "-" * 10,
                    *skill.descriptions,
                ]
                tools.update({tool.name: tool for tool in skill.tools})

        self.llm.bind_tools(list(tools.values()))
        system_prompt = "\n".join(descriptions)
        system_message = LlmMessage(role=LLM_ROLE.SYSTEM, message=system_prompt)

        llm = self.llm

        class _LlmNode(GraphNode):
            name: str = "llm"

            async def run(
                self,
                params: TState,
            ) -> TState:
                result = await llm.invoke([system_message] + params.messages)
                params.messages.append(result)
                return params

        edges.append((GraphNodeType.START, "llm"))
        nodes.append(_LlmNode())

        class _ToolsNode(GraphNode):
            name: str = "tools"

            async def run(
                self,
                params: TState,
            ) -> TState:
                updates: list[LlmMessage] = []
                last_message = params.messages[-1]
                if last_message.role == LLM_ROLE.ASSISTANT and last_message.tool_calls:
                    for tool_call in last_message.tool_calls:
                        tool = tools[tool_call.name]
                        result = await tool.ainvoke(tool_call.params)
                        updates.append(
                            LlmMessage(
                                role=LLM_ROLE.TOOL,
                                message=str(result),
                                current_tool_call=tool_call,
                            )
                        )
                params.messages.extend(updates)
                return params

        def _llm_route(state: TState) -> str:
            messages = state.messages
            if messages:
                last = messages[-1]
                if last.role == LLM_ROLE.ASSISTANT and last.tool_calls:
                    return "tools"
            return GraphNodeType.END

        if tools:
            nodes.append(_ToolsNode())
            edges.append(("tools", "llm"))
            edges.append(("llm", _llm_route))
        else:
            edges.append(("llm", GraphNodeType.END))

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

    async def run_prompt(
        self,
        prompt: str,
    ) -> TState:
        messages = [LlmMessage(role=LLM_ROLE.USER, message=prompt)]
        result = self.initial_state.clone(messages=messages)
        return await super().run(result)

    async def stream_prompt(
        self,
        prompt: str,
    ) -> AsyncIterable[TState]:
        result = self.initial_state.clone(
            messages=[LlmMessage(role=LLM_ROLE.USER, message=prompt)]
        )
        async for updates in self.stream(result):
            yield updates

    async def stream(
        self,
        params: TState,
    ) -> AsyncIterable[TState]:
        user_message = next(
            (x for x in params.messages if x.role == LLM_ROLE.USER),
            None,
        )
        if not user_message:
            raise NotFoundException("No user message found in the initial state")

        params.messages = [user_message]
        async for updates in self.graph.stream(params):
            messages = cast(list[LlmMessage], updates.messages)
            for message in messages:
                messages_out: list[str] = [message.message]
                if message.role == LLM_ROLE.ASSISTANT and message.tool_calls:
                    for tool_call in message.tool_calls:
                        messages_out += [
                            f"calling tool: {tool_call.name} with args: {str(tool_call.params)}"
                        ]
            yield params.clone(
                messages=[
                    LlmMessage(
                        role=LLM_ROLE.SYSTEM,
                        message="\n".join(messages_out),
                    )
                ]
            )


class Agent(_Agent, AgentModel): ...
