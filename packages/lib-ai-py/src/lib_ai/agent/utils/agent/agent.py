# template version: 1.0.0

from typing import (
    Any,
    AsyncIterable,
    Dict,
    Optional,
    cast,
)

from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.logger import logger
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

from .agent_models import AgentModel, AgentState, TState, _AgentModel


class _Agent(BaseModel, _AgentModel[TState]):
    descriptions: list[str]
    llm: Llm
    name: str
    state_schema: Any
    skills: Optional[list[Skill]] = None

    _graph: Optional[DirectedAcyclicGraph] = None

    def post_init(self) -> None:
        tools: Dict[str, Tool] = {}
        nodes: list[GraphNode] = []

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
        logger.info(f"\nSystem prompt:\n{system_prompt}\n")

        nodes: list[GraphNode] = []
        edges: list[GraphEdgeModel] = []

        edges.append((GraphNodeType.START, "llm"))

        async def _llm(
            state: TState,
        ) -> TState:
            result = await self.llm.invoke(
                [LlmMessage(role=LLM_ROLE.SYSTEM, message=system_prompt)]
                + state.messages
            )
            state.messages.append(result)
            return state

        nodes.append(GraphNode(name="llm", handler=_llm))

        async def _tools(
            state: TState,
        ) -> TState:
            updates: list[LlmMessage] = []
            messages = state.messages or []
            if messages:
                last = messages[-1]
                if last.role == LLM_ROLE.ASSISTANT and last.tool_calls:
                    for tool_call in last.tool_calls:
                        tool = tools[tool_call.name]
                        result = await tool.ainvoke(tool_call.params)
                        updates.append(
                            LlmMessage(
                                role=LLM_ROLE.TOOL,
                                message=str(result),
                                current_tool_call=tool_call,
                            )
                        )
            state.messages.extend(updates)
            return state

        def _llm_route(state: TState) -> str:
            messages = state.messages
            if messages:
                last = messages[-1]
                if last.role == LLM_ROLE.ASSISTANT and last.tool_calls:
                    return "tools"
            return GraphNodeType.END

        if tools:
            nodes.append(GraphNode(name="tools", handler=_tools))
            edges.append(("tools", "llm"))
            edges.append(("llm", _llm_route))
        else:
            edges.append(("llm", GraphNodeType.END))

        self._graph = DirectedAcyclicGraph(
            state_schema=self.state_schema,
            nodes=nodes,
            edges=edges,
        )

    @property
    def graph(self) -> DirectedAcyclicGraph:
        if self._graph is None:
            raise NotImplementedException("Graph is not initialized")
        return self._graph

    async def run(
        self,
        prompt: str,
    ) -> list[LlmMessage]:
        return [output async for output in self.stream(prompt)]

    async def stream(
        self,
        prompt: str,
    ) -> AsyncIterable[LlmMessage]:
        async for updates in self.graph.stream(
            AgentState(
                messages=[
                    LlmMessage(
                        role=LLM_ROLE.USER,
                        message=prompt,
                    )
                ]
            ),
        ):
            print("\n\n@@@updates", updates, "\n\n")
            messages = cast(list[LlmMessage], updates.messages)
            for message in messages:
                result: list[str] = [message.message]
                if message.role == LLM_ROLE.ASSISTANT and message.tool_calls:
                    for tool_call in message.tool_calls:
                        result += [
                            f"calling tool: {tool_call.name} with args: {str(tool_call.params)}"
                        ]
                yield LlmMessage(
                    role=LLM_ROLE.SYSTEM,
                    message="\n".join(result),
                )


class Agent(_Agent, AgentModel): ...
