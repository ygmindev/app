# template version: 1.0.0


from typing import Optional


class _RedisModel:
    async def initialize(self) -> None: ...

    async def close(self) -> None: ...

    def get(
        self,
        key: str,
    ) -> Optional[bytes | str]: ...

    def set(
        self,
        key: str,
        value: str,
    ) -> None: ...


class RedisModel(_RedisModel): ...
