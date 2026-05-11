import asyncio

from lib_ai.agent.utils.agent.agent import Agent
from lib_ai.agent.utils.agent_state.agent_state import AgentState
from lib_config.http.server.server_config_ai import server_config_ai
from lib_shared.http.utils.server.server import Server


async def main():
    state = AgentState()
    agent = Agent(
        name="test_agent",
        descriptions=["", ""],
        initial_state=state,
    )
    server = Server(
        name="server",
        config=server_config_ai,
    )
    await server.run()


asyncio.run(main())


# import asyncio

# from lib_ai.agent.utils.agent.agent import Agent
# from lib_ai.agent.utils.agent_state.agent_state import AgentState


# async def main():
#     state = AgentState()
#     agent = Agent(
#         name="test_agent",
#         descriptions=["", ""],
#         initial_state=state,
#     )
#     async for x in agent.stream_prompt("what is your name?"):
#         print(x)
#     # server = Server(
#     #     name="server",
#     #     config=server_config_ai,
#     # )
#     # await server.run()


# asyncio.run(main())
