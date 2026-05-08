# template version: 1.0.0


class _ServerModel:
    async def run(self) -> None:
        raise NotImplementedError("run")


class ServerModel(_ServerModel): ...
