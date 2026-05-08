import asyncio

from lib_config.http.server.server_config_base import server_config
from lib_shared.http.utils.server.server import Server

server = Server(
    name="server",
    config=server_config,
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
