# template version: 1.0.0

from functools import partial
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
from lib_ai.agent.utils.middleware import Middleware
from lib_ai.agent.utils.skill import Skill
from lib_ai.agent.utils.tool import Tool
from lib_ai.model.llm import Llm

from .agent_models import AgentModel, AgentState, TState, _AgentModel


class _Agent(BaseModel, _AgentModel[TState]):
    descriptions: list[str]
    llm: Llm
    name: str
    state: Any

    _graph: Optional[CompiledStateGraph] = None

    middlewares: list[Middleware[TState]] = []
    skills: list[Skill] = []

    def post_init(self) -> None:
        graph = StateGraph(self.state)

        prev = START
        for middleware in self.middlewares:

            async def _before(
                m: Middleware,
                state: Any,
                *,
                config: RunnableConfig | None = None,
                store: BaseStore | None = None,
            ) -> dict:
                result = await m.before(state, f"{m.name} before")
                return result

            node_name = f"{middleware.name} before"
            graph.add_node(node_name, partial(_before, middleware))
            graph.add_edge(prev, node_name)
            prev = node_name

        descriptions: list[str] = [x.strip() for x in self.descriptions]
        tools: Dict[str, Tool] = {}
        if self.skills:
            descriptions += ["You MUST follow the protocols below for each skill:"]
            for skill in self.skills:
                descriptions += [
                    "-" * 10,
                    *skill.descriptions,
                ]
                tools.update({x.name: x for x in skill.tools})

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
            updates = []
            result = await self.llm.invoke(
                [
                    LlmMessage(
                        role=LLM_ROLE.SYSTEM,
                        message=system_prompt,
                    )
                ]
                + state.messages
            )
            updates.append(result)
            write(updates)
            state.messages = [*state.messages, *updates]
            return state

        graph.add_node("llm", _llm)
        graph.add_edge(prev, "llm")

        # ── Determine where to go after the llm/tools loop exits ──
        # Build the "after" middleware chain first so we know the entry point
        after_nodes: list[str] = []
        for middleware in reversed(self.middlewares):

            async def _after(
                m: Middleware,
                state: Any,
                *,
                config: RunnableConfig | None = None,
                store: BaseStore | None = None,
            ) -> dict:
                result = await m.after(state, f"{m.name} after")
                return result

            node_name = f"{middleware.name} after"
            graph.add_node(node_name, partial(_after, middleware))
            after_nodes.append(node_name)

        # The node to jump to when the LLM is "done" (no more tool calls)
        exit_dest = after_nodes[0] if after_nodes else END

        if tools:

            async def _tools(
                state: AgentState,
                *,
                config: RunnableConfig | None = None,
                store: BaseStore | None = None,
            ) -> AgentState:
                write = get_stream_writer()
                updates = []
                messages = state.messages
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

            def _tools_condition(state: AgentState) -> str:
                messages = state.messages
                if not messages:
                    return exit_dest  # ← was END
                last = messages[-1]
                if last.role == LLM_ROLE.ASSISTANT and last.tool_calls:
                    return "tools"
                return exit_dest  # ← was END

            graph.add_node("tools", _tools)
            graph.add_conditional_edges("llm", _tools_condition)
            graph.add_edge("tools", "llm")
        else:
            # No tools – go straight from llm to the after chain (or END)
            graph.add_edge("llm", exit_dest)

        # ── Chain the "after" middleware nodes together ──
        for i in range(len(after_nodes) - 1):
            graph.add_edge(after_nodes[i], after_nodes[i + 1])

        # Last after-node → END
        if after_nodes:
            graph.add_edge(after_nodes[-1], END)

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


class Agent(_Agent, AgentModel): ...
