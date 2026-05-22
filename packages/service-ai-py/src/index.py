from typing import Optional

from lib_model.core.utils.entity.entity import Entity
from lib_shared.core.utils.base_model.base_model import BaseModel


class X(BaseModel):
    a: str
    b: Optional[int] = None


@Entity()
class XEntity(X): ...


x = X(a="a")
print("@@@x", x, "\n")

x_entity = XEntity(a="a")
print("@@@x_entity", x_entity, "\n")


# import asyncio

# from lib_config.http.server.server_config_ai import server_config_ai
# from lib_shared.http.utils.server.server import Server


# async def main():
#     server = Server(
#         name="server",
#         config=server_config_ai,
#     )
#     await server.run()


# asyncio.run(main())
