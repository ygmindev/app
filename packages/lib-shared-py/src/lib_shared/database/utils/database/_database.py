from typing import Optional, Type

from beanie import Document, init_beanie
from lib_config.database.database_models import DatabaseConfigModel
from motor.motor_asyncio import AsyncIOMotorClient

from lib_shared.database.utils.database._database_models import _DatabaseModel


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
            document_models=self._entities,
        )
        self._is_initialized = True

    async def insert(
        self,
        doc: Document,
    ) -> Document:
        await doc.insert()
        return doc

    async def get_by_id(
        self,
        model: Type[Document],
        doc_id: str,
    ) -> Optional[Document]:
        return await model.get(doc_id)

    async def find(
        self,
        model: Type[Document],
        query: dict = {},
    ) -> list[Document]:
        return await model.find(query).to_list()

    async def update(
        self,
        doc: Document,
        update_fields: dict,
    ) -> Document:
        for key, value in update_fields.items():
            setattr(doc, key, value)
        await doc.save()
        return doc

    async def delete(
        self,
        doc: Document,
    ) -> None:
        await doc.delete()
