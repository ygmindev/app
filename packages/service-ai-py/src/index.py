import asyncio

from lib_config.http.server.server_config_ai import server_config_ai
from lib_model.core.utils.entity.entity import Entity
from lib_shared.core.utils.dataclass.dataclass import Dataclass
from lib_shared.http.utils.server.server import Server


@Entity(name="X")
class X(Dataclass):
    a: str


x = X(a="a")
print(x)

server = Server(
    name="server",
    config=server_config_ai,
)


async def main():
    await server.run()


asyncio.run(main())

# import strawberry
# from fastapi import FastAPI
# from lib_model.ai.llm_message.llm_message import LlmMessage
# from lib_model.ai.llm_message.llm_message_constants import LlmMessageRole
# from strawberry.fastapi import GraphQLRouter

# y = LlmMessage(
#     content="hello",
#     role=LlmMessageRole.USER,
# )

# schema = strawberry.Schema(LlmMessage.__gql__)
# print(y)
# graphql_app = GraphQLRouter(schema)
# app = FastAPI()
# app.include_router(graphql_app, prefix="/graphql")
