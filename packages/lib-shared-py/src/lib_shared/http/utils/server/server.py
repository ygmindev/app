# template version: 1.0.0


import json
from contextlib import asynccontextmanager
from os import path
from typing import (
    Any,
    AsyncGenerator,
    AsyncIterable,
    Awaitable,
    Callable,
)

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from lib_config.http.api.api_config import ApiEndpoint
from lib_config.http.server.server_config import ServerConfig
from sse_starlette import EventSourceResponse
from uvicorn import Config
from uvicorn import Server as UvicornServer

from lib_shared.auth.utils.jwt_service.jwt_service import jwt_service
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.logger.logger import logger
from lib_shared.core.utils.private_field.private_field import PrivateField
from lib_shared.http.utils.http_request.http_request import HttpRequest
from lib_shared.route.utils.trim_pathname.trim_pathname import trim_pathname


class _Server(BaseModel):
    name: str = Field()
    config: ServerConfig = Field()
    initialize: Callable[[], Awaitable[None]] | None = Field(default=None)
    close: Callable[[], Awaitable[None]] | None = Field(default=None)

    _app: FastAPI = PrivateField()

    def model_post_init(self, __context: Any) -> None:
        @asynccontextmanager
        async def lifespan(app: FastAPI) -> AsyncGenerator[None, Any]:
            if callable(initialize := self.initialize):
                await initialize()
            yield
            if callable(close := self.close):
                await close()

        self._app = FastAPI(
            title=self.name,
            lifespan=lifespan,
        )

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

                http_request = HttpRequest(
                    body=body,
                    headers=dict(headers),
                )

                if route.is_protected:
                    header = headers.get("Authorization")
                    try:
                        user = jwt_service.verify_token(header)
                        http_request.user = user
                    except Exception as e:
                        print(e)

                response = route.handler(http_request)
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

        prefix = self.config.api.prefix
        for route in self.config.api.routes:
            pathname = trim_pathname(f"{prefix}/{route.pathname}")
            logger.info("%s: %s", route.method, pathname)
            self._app.add_api_route(
                path=pathname,
                endpoint=endpoint(route),
                response_model=None,
                methods=(
                    [v.value.upper() for v in route.method]
                    if isinstance(route.method, list)
                    else [route.method.upper()]
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
            **ssl_config,
        )
        server = UvicornServer(config)
        await server.serve()

    @property
    def app(self) -> FastAPI:
        return self._app


class Server(_Server): ...
