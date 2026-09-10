import asyncio

from lib_ai.agent.utils.ai_message.ai_message import AIMessage
from lib_ai.agent.utils.ai_message.constants import MessageRole
from lib_ai.model.llm.llm import Llm
from lib_config.database.database import database_config
from lib_model.chat.content.constants import ContentType
from lib_model.chat.content.content import Content
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.database.utils.database.database import Database

filepath = "/Users/yoongeemin/Downloads/corporate_hybrid.pdf"


async def run_agent() -> None:
    try:
        database = Database(config=database_config)
        await database.initialize()
        BaseModel.rebuild()

        llm = Llm()
        response = await llm.run(
            [
                AIMessage(
                    text="describe this file",
                    role=MessageRole.USER,
                    content=[Content(content_type=ContentType.PDF, value=filepath)],
                )
            ]
        )
        if response is not None:
            print(response.text)

    finally:
        await database.close()


def main():
    asyncio.run(run_agent())


if __name__ == "__main__":
    main()

# import asyncio

# from lib_ai.agent.utils.agent import Agent
# from lib_ai.agent.utils.agent.agent import DirectedAcyclicGraph
# from lib_ai.agent.utils.agent.agent_models import AgentState
# from lib_ai.graph.constants import GraphNodeType
# from lib_ai.graph.utils.agent_node.agent_node import AgentNode
# from lib_ai.graph.utils.graph_edge.graph_edge import GraphEdge
# from lib_ai.model.llm import Llm
# from lib_shared.core.utils.base_model.base_model import BaseModel


# async def run_agent() -> None:
#     BaseModel.rebuild()
#     llm = Llm()

#     class MyState(AgentState): ...

#     initial_state = MyState()

#     dag = DirectedAcyclicGraph(
#         initial_state=initial_state,
#         nodes=[
#             AgentNode(
#                 name="agent1",
#                 prompt="what's your name?",
#                 agent=Agent(
#                     name="agent1",
#                     descriptions=[
#                         "You are a chatbot developed in South Korea.",
#                         "Always provide direct, concise answers in 1 to 3 sentences maximum. Do not ramble.",
#                     ],
#                     llm=llm,
#                     initial_state=initial_state,
#                 ),
#             ),
#         ],
#         edges=[
#             GraphEdge(start=GraphNodeType.START, end="agent1"),
#             GraphEdge(start="agent1", end=GraphNodeType.END),
#         ],
#     )

#     async for item in dag.stream(initial_state):
#         print("\n", item.delta)


# def main():
#     asyncio.run(run_agent())


# if __name__ == "__main__":
#     main()
