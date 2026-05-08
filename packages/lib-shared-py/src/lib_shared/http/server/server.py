# template version: 1.0.0

from lib_config.http.server.server_config import ServerConfig

from .server_models import ServerModel, _ServerModel


class _Server(_ServerModel):
    config: ServerConfig

    def __init__(
        self,
        config: ServerConfig,
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
        config = Config(
            self.name,
            host=self.config.host or "",
            port=int(self.config.port) if self.config.port else 5000,
            reload=get_env("NODE_ENV") == "development",
        )
        server = Server(config)
        await server.serve()


class Server(_Server, ServerModel): ...
