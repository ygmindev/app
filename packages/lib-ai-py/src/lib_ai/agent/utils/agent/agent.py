# template version: 1.0.0

from typing import Any, AsyncIterable, Dict, Optional, cast

from langgraph.checkpoint.memory import MemorySaver
from langgraph.config import get_stream_writer
from langgraph.graph.state import (
    END,
    START,
    BaseStore,
    CompiledStateGraph,
    RunnableConfig,
    StateGraph,
)
from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.logger import logger
from lib_shared.core.utils.uninitialized_exception import UninitializedException

from lib_ai.agent.utils.llm_message import LlmMessage
from lib_ai.agent.utils.llm_message.constants import LLM_ROLE
from lib_ai.agent.utils.skill import Skill
from lib_ai.agent.utils.tool import Tool
from lib_ai.model.llm import Llm

from .agent_models import AgentModel, AgentNode, AgentState, TState, _AgentModel


class _Agent(_AgentModel[TState], BaseModel):
    descriptions: list[str]
    llm: Llm
    name: str
    state: Any
    nodes: Optional[list[AgentNode]] = None
    skills: Optional[list[Skill]] = None

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

        async def _llm(
            state: AgentState,
            *,
            config: RunnableConfig | None = None,
            store: BaseStore | None = None,
        ) -> AgentState:
            write = get_stream_writer()

            result = await self.llm.invoke(
                [
                    LlmMessage(
                        role=LLM_ROLE.SYSTEM,
                        message=system_prompt,
                    )
                ]
                + state.messages
            )

            updates = [result]
            write(updates)
            state.messages = [*state.messages, *updates]
            return state

        async def _tools(
            state: AgentState,
            *,
            config: RunnableConfig | None = None,
            store: BaseStore | None = None,
        ) -> AgentState:
            write = get_stream_writer()
            updates: list[LlmMessage] = []

            messages = state.messages
            if not messages:
                write(updates)
                return state

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

            write(updates)
            state.messages = [*messages, *updates]
            return state

        def _llm_node(state: AgentState) -> str:
            messages = state.messages
            if not messages:
                return "after"
            last = messages[-1]
            if last.role == LLM_ROLE.ASSISTANT and last.tool_calls:
                return "tools"
            return "after"

        prev = START

        graph.add_node("llm", _llm)

        graph.add_edge(prev, "llm")

        if tools:
            graph.add_node("tools", _tools)
            graph.add_conditional_edges(
                "llm",
                _llm_node,
                {"tools": "tools", "after": END},
            )
            graph.add_edge("tools", "llm")
        else:
            graph.add_edge("llm", END)

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
