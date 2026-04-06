# template version: 1.0.0

from typing import (
    Any,
    AsyncIterable,
    Awaitable,
    Callable,
    Dict,
    Optional,
    Protocol,
    cast,
)

from langgraph.checkpoint.memory import MemorySaver
from langgraph.config import get_stream_writer
from langgraph.graph.state import (
    END,
    START,
    CompiledStateGraph,
    StateGraph,
)
from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.logger import logger
from lib_shared.core.utils.uninitialized_exception import UninitializedException

from lib_ai.agent.utils.custom_node import CustomNode
from lib_ai.agent.utils.handoff_node import HandoffNode
from lib_ai.agent.utils.llm_message import LlmMessage
from lib_ai.agent.utils.llm_message.constants import LLM_ROLE
from lib_ai.agent.utils.skill import Skill
from lib_ai.agent.utils.supervisor_node.supervisor_node import SupervisorNode
from lib_ai.agent.utils.tool import Tool
from lib_ai.model.llm import Llm

from .agent_models import AgentModel, AgentNode, AgentState, TState, _AgentModel


class _Agent(BaseModel, _AgentModel[TState]):
    descriptions: list[str]
    llm: Llm
    name: str
    nodes_post: Optional[list[AgentNode]] = None
    nodes_pre: Optional[list[AgentNode]] = None
    skills: Optional[list[Skill]] = None
    state: Any

    _graph: Optional[CompiledStateGraph] = None

    def post_init(self) -> None:
        graph = StateGraph(self.state)
        descriptions: list[str] = [x.strip() for x in self.descriptions]
        tools: Dict[str, Tool] = {}

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

        class _Wrapped(Protocol):
            def __call__(self, state: AgentState) -> Awaitable[AgentState]: ...

        def _node(
            handler: Callable[[AgentState], Awaitable[list[LlmMessage]]],
        ) -> _Wrapped:
            async def _wrapped(
                state: AgentState,
            ) -> AgentState:
                write = get_stream_writer()
                messages = state.messages or []
                result = await handler(state)
                if result:
                    write(result)
                    state.messages = [*messages, *result]
                return state

            return _wrapped

        def _wire_nodes(
            nodes: list[AgentNode],
            prefix: str,
        ) -> tuple[str, str]:
            node_name: str = ""
            exit_name: str = ""

            for i, node in enumerate(nodes):
                node_name = f"{prefix}_{node.name}"
                if isinstance(node, CustomNode):
                    graph.add_node(node_name, _node(node.handler))
                    exit_name = node_name

                elif isinstance(node, HandoffNode):

                    async def _handoff(
                        state: AgentState,
                        _agent: _Agent = node.agent,
                    ) -> list[LlmMessage]:
                        return await _agent.run(state.messages[-1].message)

                    graph.add_node(node_name, _node(_handoff))
                    exit_name = node_name

                elif isinstance(node, SupervisorNode):

                    async def _supervisor(
                        state: AgentState,
                        _agents: list[_Agent] = node.agents,
                        _finish: str = node.finish_token,
                    ) -> list[LlmMessage]:
                        agent_map: Dict[str, _AgentModel] = {a.name: a for a in _agents}
                        return []

                    graph.add_node(node_name, _node(_supervisor))
                    exit_name = node_name

            return (node_name, exit_name)

        # Preprocessing nodes
        prev = START
        if self.nodes_pre:
            node_name, exit_name = _wire_nodes(
                self.nodes_pre,
                prefix="pre",
            )
            graph.add_edge(prev, node_name)
            prev = exit_name

        graph.add_edge(prev, "llm")

        # Postprocessing nodes
        post = END
        if self.nodes_post:
            node_name, exit_name = _wire_nodes(
                self.nodes_post,
                prefix="post",
            )
            graph.add_edge(exit_name, post)
            post = node_name

        # Main LLM nodes
        async def _llm(
            state: AgentState,
        ) -> list[LlmMessage]:
            result = await self.llm.invoke(
                [
                    LlmMessage(
                        role=LLM_ROLE.SYSTEM,
                        message=system_prompt,
                    )
                ]
                + state.messages
            )
            return [result]

        async def _tools(
            state: AgentState,
        ) -> list[LlmMessage]:
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
            return updates

        def _llm_route(state: AgentState) -> str:
            messages = state.messages
            if messages:
                last = messages[-1]
                if last.role == LLM_ROLE.ASSISTANT and last.tool_calls:
                    return "tools"
            return "after"

        graph.add_node("llm", _node(_llm))
        if tools:
            graph.add_node("tools", _node(_tools))
            graph.add_conditional_edges(
                "llm",
                _llm_route,
                {"tools": "tools", "after": post},
            )
            graph.add_edge("tools", "llm")
        else:
            graph.add_edge("llm", post)

        self._graph = graph.compile(checkpointer=MemorySaver())

    async def run(
        self,
        prompt: str,
    ) -> list[LlmMessage]:
        return [output async for output in self.stream(prompt)]

    async def stream(
        self,
        prompt: str,
    ) -> AsyncIterable[LlmMessage]:
        if not self._graph:
            raise UninitializedException("agent")

        async for messages in self._graph.astream(
            AgentState(
                messages=[
                    LlmMessage(
                        role=LLM_ROLE.USER,
                        message=prompt,
                    )
                ]
            ),
            stream_mode="custom",
            config={"configurable": {"thread_id": "conversation_1"}},
        ):
            messages = cast(list[LlmMessage], messages)
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

    async def visualize(
        self,
    ) -> None:
        if self._graph is None:
            raise UninitializedException("agent")
        self._graph.get_graph().draw_mermaid_png(output_file_path="graph.png")


class Agent(_Agent, AgentModel): ...
