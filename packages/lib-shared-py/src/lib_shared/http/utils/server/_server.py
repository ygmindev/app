from json import JSONDecodeError

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from lib_config.http.server.server_models import ServerConfigModel
from uvicorn import run

from lib_shared.core.utils.get_env import get_env
from lib_shared.core.utils.logger import logger
from lib_shared.http.utils.models import HttpRequestModel
from lib_shared.http.utils.server._server_models import _ServerModel
from lib_shared.route.utils.trim_pathname import trim_pathname


class _Server(_ServerModel):
    def __init__(
        self,
        config: ServerConfigModel,
        name: str,
    ) -> None:
        super().__init__(
            config=config,
            name=name,
        )
        self.app = FastAPI(title=self.name)
        for route in config.api.routes:

            async def endpoint(req: Request) -> JSONResponse:
                headers = req.headers
                try:
                    body = await req.json()
                except JSONDecodeError:
                    body = await req.body()
                response = await route.handler(
                    HttpRequestModel(
                        body=body,
                        headers=dict(headers),
                    )
                )
                return JSONResponse(
                    content=response.body,
                    status_code=response.status_code.value,
                )

            pathname = trim_pathname(route.pathname)
            self.app.add_api_route(
                endpoint=endpoint,
                path=pathname,
                methods=(
                    [v.value.upper() for v in route.method]
                    if isinstance(route.method, list)
                    else [route.method.value.upper()]
                ),
            )
            logger.info(f"{route.method}: {pathname}")

    async def run(self) -> None:
        run(
            self.name,
            host=self.config.host or "",
            port=int(self.config.port) if self.config.port else 5000,
            reload=get_env("NODE_ENV") == "development",
        )
