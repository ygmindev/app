# template version: 1.0.0


from typing import Sequence


class _RedisModel:
    async def initialize(self) -> None: ...

    async def close(self) -> None: ...

    async def get(
        self,
        key: str | Sequence[str],
    ) -> str | None: ...

    async def set(
        self,
        key: str | Sequence[str],
        value: str,
    ) -> None: ...


class RedisModel(_RedisModel): ...
