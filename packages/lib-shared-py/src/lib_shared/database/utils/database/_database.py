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
            document_models=self._params.entities,
        )
        self._is_initialized = True

    async def create(
        self,
        doc: TType,
    ) -> TType:
        await doc.insert()
        return doc

    async def create_many(
        self,
        docs: list[TType],
        model: Type[TType],
    ) -> list[TType]:
        await model.insert_many(docs)
        return docs

    async def find(
        self,
        query: dict,
        model: Type[TType],
    ) -> list[TType]:
        results = await model.find(query).to_list()
        return results

    async def update(
        self,
        doc: TType,
        update_fields: dict,
    ) -> TType:
        for key, value in update_fields.items():
            setattr(doc, key, value)
        await doc.save()
        return doc

    async def delete(
        self,
        doc: TType,
    ) -> None:
        await doc.delete()
