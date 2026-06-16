# template version: 1.0.0


from typing import Optional, Sequence

from lib_config.redis.redis_models import RedisConfigModel

import redis
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from .redis_models import RedisModel, _RedisModel


class _Redis(_RedisModel, BaseModel):
    config: RedisConfigModel = Field()

    _client: redis.Redis = PrivateField()

    async def initialize(self) -> None:
        pool = redis.ConnectionPool.from_url(
            self.config.url,
            decode_responses=True,
            max_connections=self.config.max_pool,
        )
        self._client = redis.Redis(connection_pool=pool)

    async def close(self) -> None:
        self._client.close()

    def get(
        self,
        key: str | Sequence[str],
    ) -> Optional[str]:
        key = key if isinstance(key, str) else ":".join(key)
        return f"{self._client.get(key)}"

    def set(
        self,
        key: str | Sequence[str],
        value: str,
        expiration: Optional[int] = None,
    ) -> None:
        key = key if isinstance(key, str) else ":".join(key)
        if expiration:
            self._client.setex(key, expiration, value)
        else:
            self._client.set(key, value)


class Redis(_Redis, RedisModel): ...
