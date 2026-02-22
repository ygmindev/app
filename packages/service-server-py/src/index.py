from asyncio import run

from lib_config.http.server.server_base import server_config
from lib_shared.http.utils.server import Server

server = Server(
    config=server_config,
    name="index:server.app",
)
app = server.app

if __name__ == "__main__":
    run(server.run())
