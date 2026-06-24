# template version: 1.0.0


from typing import Optional, Sequence


class _RedisModel:
    async def initialize(self) -> None: ...

    async def close(self) -> None: ...

    async def get(
        self,
        key: str | Sequence[str],
    ) -> Optional[str]: ...

    async def set(
        self,
        key: str | Sequence[str],
        value: str,
    ) -> None: ...


class RedisModel(_RedisModel): ...
