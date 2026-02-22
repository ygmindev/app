from lib_config.http.server.server_models import ServerConfigModel

from lib_shared.core.utils.base_model import BaseModel


class _ServerModel(BaseModel):
    config: ServerConfigModel
    name: str

    async def run(self) -> None:
        raise NotImplementedError("run")
