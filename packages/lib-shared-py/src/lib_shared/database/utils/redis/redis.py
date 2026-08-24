# template version: 1.0.0


from typing import Sequence

from lib_config.redis.redis_models import RedisConfigModel

import redis.asyncio as aioredis
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField


class _Redis(BaseModel):
    config: RedisConfigModel = Field()

    _client: aioredis.Redis = PrivateField()

    async def initialize(self) -> None:
        pool = aioredis.ConnectionPool.from_url(
            self.config.url,
            decode_responses=True,
            max_connections=self.config.max_pool,
        )
        self._client = aioredis.Redis(connection_pool=pool)

    async def close(self) -> None:
        await self._client.aclose()

    async def get(
        self,
        key: str | Sequence[str],
    ) -> str | None:
        key = key if isinstance(key, str) else ":".join(key)
        value = await self._client.get(key)
        return f"{value}" if value else None

    async def set(
        self,
        key: str | Sequence[str],
        value: str,
        expiration: int | None = None,
    ) -> None:
        key = key if isinstance(key, str) else ":".join(key)
        if expiration:
            await self._client.setex(key, expiration, value)
        else:
            await self._client.set(key, value)


Redis = _Redis
