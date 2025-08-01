from typing import Type

from beanie import init_beanie
from lib_config.database.database_models import DatabaseConfigModel
from motor.motor_asyncio import AsyncIOMotorClient

from lib_shared.database.utils.database._database_models import TType, _DatabaseModel


class _Database(_DatabaseModel):
    def __init__(
        self,
        params: DatabaseConfigModel,
    ) -> None:
        self._params = params
        self._client = None
        self._is_initialized = False

    async def initialize(self) -> None:
        if self._is_initialized:
            return
        self._client = AsyncIOMotorClient(self._params.host)
        await init_beanie(
            database=self._client[self._params.database],
            document_models=self._params.resources,
        )
        self._is_initialized = True

    async def create(
        self,
        data: TType,
    ) -> TType:
        await data.insert()
        return data

    async def create_many(
        self,
        data: list[TType],
        resource: Type[TType],
    ) -> list[TType]:
        await resource.insert_many(data)
        return data

    async def find(
        self,
        query: dict,
        resource: Type[TType],
    ) -> list[TType]:
        results = await resource.find(query).to_list()
        return results

    async def update(
        self,
        data: TType,
        update_fields: dict,
    ) -> TType:
        for key, value in update_fields.items():
            setattr(data, key, value)
        await data.save()
        return data

    async def delete(
        self,
        data: TType,
    ) -> None:
        await data.delete()
