# template version: 1.0.0

from typing import AsyncIterable, Optional

from langchain.agents import create_agent
from langchain_core.messages import AIMessage, ToolMessage
from langgraph.graph.state import CompiledStateGraph
from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.logger import logger
from lib_shared.core.utils.uninitialized_exception import UninitializedException

from lib_ai.agent.utils.skill import Skill
from lib_ai.agent.utils.tool import Tool
from lib_ai.model.llm import Llm
from lib_ai.model.llm.llm_models import LLM_OUTPUT_TYPE, LlmOutput

from .agent_models import AgentModel, _AgentModel


class _Agent(BaseModel, _AgentModel):
    description: str
    llm: Llm
    name: str
    skills: list[Skill] = []

    _agent: Optional[CompiledStateGraph] = None

    def post_init(self):
        if not self.llm._llm:
            raise UninitializedException("llm")

        tools: list[Tool] = []
        descriptions: list[str] = [self.description.strip()]

        if self.skills:
            descriptions += ["You MUST follow the protocols below for each skill:"]
            for skill in self.skills:
                descriptions += [
                    "-" * 10,
                    *skill.descriptions,
                ]
                tools += skill.tools

        system_prompt = "\n".join(descriptions)
        logger.info(f"\nSystem prompt:\n{system_prompt}\n")
        self._agent = create_agent(
            model=self.llm._llm,
            system_prompt=system_prompt,
            tools=tools,
        )

    async def run(
        self,
        prompt: str,
    ) -> list[LlmOutput]:
        return [output async for output in self.stream(prompt)]

    async def stream(
        self,
        prompt: str,
    ) -> AsyncIterable[LlmOutput]:
        if not self._agent:
            raise UninitializedException("agent")

        async for step in self._agent.astream(
            {"messages": [{"role": "user", "content": prompt}]},
            stream_mode="updates",
        ):
            for node_name, state_update in step.items():
                messages = state_update.get("messages", [])

                for msg in messages:
                    type = LLM_OUTPUT_TYPE.MESSAGE
                    result: list[str] = []
                    if msg.content:
                        result += [str(msg.content)]

                    if isinstance(msg, AIMessage):
                        if msg.tool_calls:
                            for tool_call in msg.tool_calls:
                                result += [
                                    f"calling tool: {tool_call['name']} with args: {str(tool_call['args'])}"
                                ]
                    elif isinstance(msg, ToolMessage):
                        type = LLM_OUTPUT_TYPE.TOOL_CALL
                        result += [f"called tool: {msg.name}"]

                    yield LlmOutput(
                        message="\n".join(result),
                        type=type,
                    )


class Agent(_Agent, AgentModel): ...
