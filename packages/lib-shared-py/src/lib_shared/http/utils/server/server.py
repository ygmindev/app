# template version: 1.0.0


import json
from os import path
from typing import AsyncIterable, Awaitable, Callable

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from lib_config.http.api.api_config import ApiEndpoint
from lib_config.http.server.server_config import ServerConfig
from sse_starlette import EventSourceResponse
from uvicorn import Config
from uvicorn import Server as UvicornServer

from lib_shared.core.utils.dataclass.dataclass import Dataclass
from lib_shared.core.utils.get_env import get_env
from lib_shared.core.utils.logger.logger import Logger
from lib_shared.core.utils.private_field.private_field import PrivateField
from lib_shared.http.utils.http_request.http_request import HttpRequest
from lib_shared.route.utils.trim_pathname import trim_pathname

from .server_models import ServerModel, _ServerModel

logger = Logger()


class _Server(Dataclass, _ServerModel):
    name: str
    config: ServerConfig

    _app: FastAPI = PrivateField()

    def post_init(self) -> None:
        self._app = FastAPI(title=self.name)

        self._app.add_middleware(
            CORSMiddleware,
            allow_origins=["*"],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )

        def endpoint(
            route: ApiEndpoint,
        ) -> Callable[[Request], Awaitable[JSONResponse | EventSourceResponse | None]]:
            async def _handler(
                request: Request,
            ) -> JSONResponse | EventSourceResponse | None:
                headers = request.headers
                try:
                    body = await request.json()
                except json.JSONDecodeError:
                    body = await request.body()

                response = route.handler(
                    HttpRequest(
                        body=body,
                        headers=dict(headers),
                    )
                )
                if isinstance(response, Awaitable):
                    result = await response
                    return JSONResponse(
                        content=result.body,
                        status_code=result.status_code.value,
                    )
                elif isinstance(response, AsyncIterable):

                    async def stream() -> AsyncIterable[dict]:
                        try:
                            async for value in response:
                                yield {"data": json.dumps(value), "event": "message"}
                        finally:
                            yield {"data": "", "event": "done"}

                    return EventSourceResponse(stream())
                return None

            return _handler

        for route in self.config.api.routes:
            pathname = trim_pathname(route.pathname)
            logger.info("%s: %s", route.method, pathname)
            self._app.add_api_route(
                path=pathname,
                endpoint=endpoint(route),
                response_model=None,
                methods=(
                    [v.value.upper() for v in route.method]
                    if isinstance(route.method, list)
                    else [route.method.value.upper()]
                ),
            )

    async def run(self) -> None:
        certificate_dir = self.config.certificate_dir
        ssl_config = dict()
        if certificate_dir:
            ssl_config["ssl_certfile"] = path.join(
                certificate_dir,
                self.config.public_key_filename or "",
            )
            ssl_config["ssl_ca_certs"] = path.join(
                certificate_dir,
                self.config.ca_filename or "",
            )
            ssl_config["ssl_keyfile"] = path.join(
                certificate_dir,
                self.config.private_key_filename or "",
            )
        config = Config(
            self._app,
            host=self.config.host or "127.0.0.1",
            port=int(self.config.port) if self.config.port else 5010,
            reload=get_env("NODE_ENV") == "development",
            **ssl_config,
        )
        server = UvicornServer(config)
        await server.serve()


class Server(_Server, ServerModel): ...
