import asyncio

from lib_ai.agent.utils.agent import Agent
from lib_ai.agent.utils.agent.agent import DirectedAcyclicGraph
from lib_ai.agent.utils.agent.agent_models import AgentState
from lib_ai.graph.constants import GraphNodeType
from lib_ai.graph.utils.agent_node.agent_node import AgentNode
from lib_ai.graph.utils.graph_edge.graph_edge import GraphEdge
from lib_ai.model.llm import Llm
from lib_shared.core.utils.base_model.base_model import BaseModel


async def run_agent() -> None:
    BaseModel.rebuild()
    llm = Llm()

    class MyState(AgentState): ...

    initial_state = MyState()

    dag = DirectedAcyclicGraph(
        initial_state=initial_state,
        nodes=[
            AgentNode(
                name="agent1",
                prompt="what's your name?",
                agent=Agent(
                    name="agent1",
                    descriptions=["you are a chatbot developed in South Korea"],
                    llm=llm,
                    initial_state=initial_state,
                ),
            ),
        ],
        edges=[
            GraphEdge(start=GraphNodeType.START, end="agent1"),
            GraphEdge(start="agent1", end=GraphNodeType.END),
        ],
    )

    async for item in dag.stream(initial_state):
        print("\n", item)


def main():
    asyncio.run(run_agent())


if __name__ == "__main__":
    main()
