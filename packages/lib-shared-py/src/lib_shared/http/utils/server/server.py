# template version: 1.0.0


import json
from typing import Awaitable, Callable

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.responses import StreamingResponse as StreamingResponseBase
from lib_config.http.api.api_config import ApiEndpoint
from lib_config.http.server.server_config import ServerConfig
from uvicorn import Config
from uvicorn import Server as UvicornServer

from lib_shared.core.utils.dataclass.dataclass import Dataclass
from lib_shared.core.utils.get_env import get_env
from lib_shared.core.utils.logger.logger import Logger
from lib_shared.core.utils.private_field.private_field import PrivateField
from lib_shared.http.utils.http_request.http_request import HttpRequest
from lib_shared.http.utils.http_response.http_response import HttpResponse
from lib_shared.http.utils.streaming_response.streaming_response import (
    StreamingResponse,
)
from lib_shared.route.utils.trim_pathname import trim_pathname

from .server_models import ServerModel, _ServerModel

logger = Logger()


class _Server(Dataclass, _ServerModel):
    name: str
    config: ServerConfig

    _app: FastAPI = PrivateField()

    def post_init(
        self,
    ) -> None:
        self._app = FastAPI(title=self.name)

        def endpoint(
            route: ApiEndpoint,
        ) -> Callable[
            [Request], Awaitable[JSONResponse | StreamingResponseBase | None]
        ]:
            async def _handler(
                request: Request,
            ) -> JSONResponse | StreamingResponseBase | None:
                headers = request.headers
                try:
                    body = await request.json()
                except json.JSONDecodeError:
                    body = await request.body()
                response = await route.handler(
                    HttpRequest(
                        body=body,
                        headers=dict(headers),
                    )
                )
                if isinstance(response, HttpResponse):
                    return JSONResponse(
                        content=response.body,
                        status_code=response.status_code.value,
                    )
                elif isinstance(response, StreamingResponse):
                    return StreamingResponseBase(
                        response.body,
                        media_type="text/event-stream",
                        headers={
                            "Cache-Control": "no-cache",
                            "X-Accel-Buffering": "no",
                            "Connection": "keep-alive",
                        },
                    )
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
        config = Config(
            self._app,
            host=self.config.host or "127.0.0.1",
            port=int(self.config.port) if self.config.port else 5010,
            reload=get_env("NODE_ENV") == "development",
        )
        server = UvicornServer(config)
        await server.serve()


class Server(_Server, ServerModel): ...
