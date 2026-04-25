from typing import Optional

import strawberry
from lib_model.core.utils.entity.entity import Entity
from lib_shared.core.utils.dataclass.dataclass import Dataclass


@Entity(name="X")
@Dataclass()
class X:
    a: float
    b: str
    c: Optional[str] = None


x = X(a=1, b="")

print("\n\n@@X:\n", x)


schema = strawberry.Schema(X)
print("\n\n@@SCHEMA:\n", schema.as_str())

# import asyncio

# from lib_ai.agent.utils.agent import Agent
# from lib_ai.agent.utils.agent.agent import DirectedAcyclicGraph
# from lib_ai.agent.utils.agent.agent_models import AgentState
# from lib_ai.core.utils.directed_acyclic_graph.agent_node import AgentNode
# from lib_ai.model.llm import Llm
# from lib_ai.model.llm.constants import LLM_NAME


# async def run_agent():
#     llm = Llm(name=LLM_NAME.LLAMA_3_2)

#     class MyState(AgentState): ...

#     initial_state = MyState()

#     dag = DirectedAcyclicGraph(
#         initial_state=initial_state,
#         nodes=[
#             AgentNode(
#                 name="agent1",
#                 prompt="what is the weather in new york?",
#                 agent=Agent(
#                     name="agent1",
#                     descriptions=[
#                         "if you're not sure, come up with a better, different question"
#                     ],
#                     llm=llm,
#                     initial_state=initial_state,
#                 ),
#             ),
#         ],
#         edges=[("agent1")],
#     )

#     async for item in dag.stream(initial_state):
#         print("\n", item.messages)


# def main():
#     asyncio.run(run_agent())


# if __name__ == "__main__":
#     main()
