import asyncio

from lib_ai.agent.utils.agent import Agent
from lib_ai.agent.utils.agent.agent_models import AgentState
from lib_ai.model.llm import Llm
from lib_ai.model.llm.constants import LLM_NAME


async def run_agent():
    llm = Llm(name=LLM_NAME.GLM_5)

    class MyState(AgentState): ...

    agent = Agent(
        name="Weather agent",
        descriptions=[],
        llm=llm,
        initial_state=MyState(),
    )

    prompt = "what is the weather in New York?"
    async for item in agent.stream_prompt(prompt=prompt):
        print("\n", item.messages)


def main():
    asyncio.run(run_agent())


if __name__ == "__main__":
    main()
