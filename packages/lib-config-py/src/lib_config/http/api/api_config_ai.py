from typing import AsyncIterable

from lib_ai.agent.utils.agent.agent import Agent
from lib_ai.agent.utils.agent_state.agent_state import AgentState
from lib_shared.http.utils.constants import HTTP_METHOD

from lib_config.http.api.api_config import ApiConfig, ApiEndpoint
from lib_config.http.api.api_config_base import api_config_base

state = AgentState()
agent = Agent[AgentState](
    name="test_agent",
    descriptions=["", ""],
    initial_state=state,
)


async def ai_handler(_) -> AsyncIterable[str]:
    async for x in agent.stream_prompt("what is your name?"):
        yield x.messages[-1].message


api_config_ai = api_config_base.update(
    ApiConfig(
        prefix="api",
        routes=[
            ApiEndpoint(
                pathname="ai",
                method=HTTP_METHOD.GET,
                handler=ai_handler,
            ),
        ],
    )
)
